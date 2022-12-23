import React, { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Profile: undefined
	Favorites: undefined
	Trending: undefined
	Search: undefined
	Screen404: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
	Actor: {
		slug: string
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
	ActorEdit: { id: string }
	ActorList: undefined
	GenreEdit: { id: string }
	GenreList: undefined
	MovieEdit: { id: string }
	MovieList: undefined
	UserEdit: { id: string }
	UserList: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
