import { IMovie } from '@/shared/types/movie.interface'

export interface IMovieCatalog {
	title: string
	description?: string
	movies?: IMovie[]
	isBackButton?: boolean
}
