import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IMovie } from '@/shared/types/movie.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import { IMovieComponent } from './movie-page.interface'

const MovieBackground: FC<IMovieComponent> = ({ movie }) => {
	const { top } = useSafeAreaInsets()
	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				source={getMediaSource(movie.poster)}
				resizeMode='cover'
			/>
			<LinearGradient
				style={StyleSheet.absoluteFill}
				start={[0, 0.3]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#090909']}
			/>
		</Animated.View>
	)
}

export default MovieBackground
