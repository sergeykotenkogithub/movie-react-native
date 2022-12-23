import { request } from '@/services/api/request.api'

import { getUsersUrl } from '@/config/api.config'

export const AdminService = {
	async getCountUsers() {
		return request<number>({
			url: getUsersUrl('/count'),
			method: 'GET'
		})
	}
}
