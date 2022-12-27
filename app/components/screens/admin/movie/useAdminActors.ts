import { useQuery } from '@tanstack/react-query'

import { ActorService } from '@/services/actor.service'

export const useAdminActors = () =>
	useQuery(['List of actor'], () => ActorService.getAll(), {
		select: data =>
			data.map(actor => ({
				label: actor.name,
				value: actor._id
			}))
	})
