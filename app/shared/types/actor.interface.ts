export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IActorEditInput extends Omit<IActor, '_id'> {}
