import ActorEdit from '@/components/screens/admin/actor/ActorEdit'
import ActorList from '@/components/screens/admin/actors/ActorList'
import GenreEdit from '@/components/screens/admin/genre/GenreEdit'
import GenreList from '@/components/screens/admin/genres/GenreList'
import Admin from '@/components/screens/admin/home/Admin'
import MovieEdit from '@/components/screens/admin/movie/MovieEdit'
import MovieList from '@/components/screens/admin/movies/MovieList'
import UserEdit from '@/components/screens/admin/user/UserEdit'
import UserList from '@/components/screens/admin/users/UserList'

import { IRoute } from './navigation.types'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	},
	{
		name: 'ActorEdit',
		component: ActorEdit,
		isAdmin: true
	},
	{
		name: 'ActorList',
		component: ActorList,
		isAdmin: true
	},
	{
		name: 'GenreEdit',
		component: GenreEdit,
		isAdmin: true
	},
	{
		name: 'GenreList',
		component: GenreList,
		isAdmin: true
	},
	{
		name: 'MovieEdit',
		component: MovieEdit,
		isAdmin: true
	},
	{
		name: 'MovieList',
		component: MovieList,
		isAdmin: true
	},
	{
		name: 'UserEdit',
		component: UserEdit,
		isAdmin: true
	},
	{
		name: 'UserList',
		component: UserList,
		isAdmin: true
	}
]
