import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/services/movie.service'

export const useGetAllMovies = () => {
	const { data: movies, isLoading } = useQuery(
		['get movies'],
		() => MovieService.getAll(),
		{
			select: data => data.slice(0, 10)
		}
	)

	return { movies, isLoading }
}
