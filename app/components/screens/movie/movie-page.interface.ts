import { Animated } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

export interface IMovieComponent {
	movie: IMovie
	y: Animated.Value
}
