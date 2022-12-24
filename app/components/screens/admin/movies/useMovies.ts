import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import Toast from 'react-native-toast-message'

import { useSearchForm } from '@/components/screens/search/useSearchForm'
import { ITableItem } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { MovieService } from '@/services/movie.service'

export const useMovies = () => {
	const { debouncedSearch, control } = useSearchForm()

	const { navigate } = useTypedNavigation()

	const queryData = useQuery(
		['search movies', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: data =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editNavigate: () =>
							navigate('MovieEdit', {
								id: movie._id
							}),
						items: [
							movie.title,
							`${movie.genres[0].name} ${movie.genres.length > 1 ? '...' : ''}`,
							String(movie.rating)
						]
					})
				)
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		['create movie'],
		() => MovieService.create(),
		{
			onSuccess: async _id => {
				Toast.show({
					type: 'success',
					text1: 'Create movie',
					text2: 'create was successful'
				})

				navigate('MovieEdit', {
					id: _id
				})
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movie'],
		(movieId: string) => MovieService.delete(movieId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete movie',
					text2: 'delete was successful'
				})

				await queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({ ...queryData, control, deleteAsync, createAsync }),
		[queryData, deleteAsync, createAsync]
	)
}
