import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/services/movie.service'

export const useTrending = () => {
	const { isLoading, data: movies } = useQuery(['get trending movies'], () =>
		MovieService.getMostPopularMovies()
	)

	return { movies, isLoading }
}
