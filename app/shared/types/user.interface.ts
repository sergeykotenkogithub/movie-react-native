export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	isAdmin: string
}

export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}
