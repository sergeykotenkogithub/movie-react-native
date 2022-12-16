import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	// {
	// 	name: 'Home',
	// 	components: Home
	// },
	{
		name: 'Auth',
		components: Auth
	}
]
