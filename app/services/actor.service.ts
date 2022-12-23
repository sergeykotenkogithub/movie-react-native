import { IActor, IActorEditInput } from '@/shared/types/actor.interface'

import { request } from '@/services/api/request.api'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return request<IActor[]>({
			url: getActorsUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getBySlug(slug: string) {
		return request<IActor>({
			url: getActorsUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	async getById(_id: string) {
		return request<IActorEditInput>({
			url: getActorsUrl(`/${_id}`),
			method: 'GET'
		})
	},

	async create() {
		return request<string>({
			url: getActorsUrl('/'),
			method: 'POST'
		})
	},

	async update(_id: string, data: IActorEditInput) {
		return request<string>({
			url: getActorsUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	},

	async delete(_id: string) {
		return request<string>({
			url: getActorsUrl(`/${_id}`),
			method: 'DELETE'
		})
	}
}
