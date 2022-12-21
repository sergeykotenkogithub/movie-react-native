import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieService } from '@/services/movie.service'

export const useMovie = () => {
	const { params } = useTypedRoute<'Movie'>()

	const { isLoading, data: movie } = useQuery(
		['get genre by slug', params.slug],
		() => MovieService.getBySlug(params.slug)
	)

	return { isLoading, movie }
}
