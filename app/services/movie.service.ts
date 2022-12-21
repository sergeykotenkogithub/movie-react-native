import { IAuthFormData } from '@/shared/types/auth.interface'
import { IMovie, IMovieEditInput } from '@/shared/types/movie.interface'

import { getMoviesUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return await request<IMovie[]>({
			url: getMoviesUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	async getMostPopularMovies() {
		return await request<IMovie[]>({
			url: getMoviesUrl('/most-popular'),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await request<IMovie>({
			url: getMoviesUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},
	async getActor(actorId: string) {
		return await request<IMovie[]>({
			url: getMoviesUrl(`/by-actor/${actorId}`),
			method: 'GET'
		})
	},
	async getByGenres(genreIds: string[]) {
		return await request<IMovie>({
			url: getMoviesUrl(`/by-genres`),
			method: 'POST',
			data: { genreIds }
		})
	},

	async getById(_id: string) {
		return await request<IMovieEditInput>({
			url: getMoviesUrl(`/by-slug/${_id}`),
			method: 'GET'
		})
	},

	async create() {
		return await request<string>({
			url: getMoviesUrl(''),
			method: 'POST'
		})
	},

	async update(_id: string, data: IMovieEditInput) {
		return await request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	},

	async delete(_id: string) {
		return await request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'DELETE'
		})
	},

	async updateCountOpened(slug: string) {
		return request<string>({
			url: getMoviesUrl('/update-count-opened'),
			method: 'PUT',
			data: {
				slug
			}
		})
	}
}
