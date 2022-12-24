import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { ITableItem } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { ActorService } from '@/services/actor.service'

import { useSearchForm } from '../../search/useSearchForm'

export const useActors = () => {
	const { control, debouncedSearch } = useSearchForm()

	const { navigate } = useTypedNavigation()

	const queryData = useQuery(
		['search actors', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: data =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editNavigate: () =>
							navigate('ActorEdit', {
								id: actor._id
							}),
						items: [actor.name, String(actor.countMovies)]
					})
				)
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		['create actor'],
		() => ActorService.create(),
		{
			onSuccess: async _id => {
				Toast.show({
					type: 'success',
					text1: 'Create actor',
					text2: 'create was successful'
				})

				navigate('ActorEdit', {
					id: _id
				})
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete actor'],
		(actorId: string) => ActorService.delete(actorId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete actor',
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
