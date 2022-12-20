export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
}

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
