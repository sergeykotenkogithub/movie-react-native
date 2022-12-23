import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

export const useActor = () => {
	const { params } = useTypedRoute<'Actor'>()

	const { isLoading, data: actor } = useQuery(
		['get actor by slug', params.slug],
		() => ActorService.getBySlug(params.slug)
	)

	const actorId = actor?._id || ''

	const { isLoading: isMovieLoading, data: movies } = useQuery(
		['get movies by actor', actorId],
		() => MovieService.getActor(actorId),
		{
			enabled: !!actorId
		}
	)

	return { actor, movies, isLoading: isLoading || isMovieLoading }
}
