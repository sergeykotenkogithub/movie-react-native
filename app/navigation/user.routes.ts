import Actor from '@/components/screens/actor/Actor'
import Auth from '@/components/screens/auth/Auth'
import Favorites from '@/components/screens/favorites/Favorites'
import Genre from '@/components/screens/genre/Genre'
import Home from '@/components/screens/home/Home'
import Movie from '@/components/screens/movie/Movie'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Trending from '@/components/screens/trending/Trending'

import { adminRoutes } from './admin.routes'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Genre',
		component: Genre
	},
	{
		name: 'Actor',
		component: Actor
	},
	{
		name: 'Movie',
		component: Movie
	}
]

export const routes = [...userRoutes, ...adminRoutes]
