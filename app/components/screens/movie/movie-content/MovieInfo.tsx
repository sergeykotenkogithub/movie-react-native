import { Entypo } from '@expo/vector-icons'
import { FC } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import { GenreList, Rating } from '@/components/ui'

import { IMovie } from '@/shared/types/movie.interface'

import { IMovieComponent } from '../movie-page.interface'
import { HEADER_HEIGHT, inputRange } from '../movie.constant'

const MovieInfo: FC<IMovieComponent> = ({ movie, y }) => {
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	})

	return (
		<Animated.View className='px-6 mb-3' style={{ opacity }}>
			<Text
				className='text-5xl font-semibold text-[#F9FCFC] mb-2 pr-2'
				numberOfLines={2}
			>
				{movie.title}
			</Text>
			<View className='mb-4 flex-row items-center opacity-70'>
				<Rating rating={movie.rating} size={18} />
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255, 255, 255,.5)'
					style={{ marginLeft: 4 }}
				/>
				<Text style={styles.text}>{movie.parameters.duration} min</Text>
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255, 255, 255,.5)'
					style={{ marginLeft: 4 }}
				/>
				<Text style={styles.text}>{movie.parameters.year}</Text>
			</View>
			<GenreList genres={movie.genres} />
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		marginHorizontal: 4,
		fontSize: 18
	}
})

export default MovieInfo
