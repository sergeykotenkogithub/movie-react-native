import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IMovie } from '@/shared/types/movie.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import { IMovieComponent } from './movie-page.interface'
import { HEADER_HEIGHT, inputRange } from './movie.constant'

const MovieBackground: FC<IMovieComponent> = ({ movie, y }) => {
	const { top } = useSafeAreaInsets()

	const scale = y.interpolate({
		inputRange,
		outputRange: [2, 1, 1],
		extrapolate: 'clamp'
	})

	const translateY = y.interpolate({
		inputRange,
		outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.01]
	})

	return (
		<Animated.View
			style={[
				{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT * 1.76,
					marginTop: -top,
					transform: [{ scale }, { translateY }]
				}
			]}
		>
			<Image
				style={StyleSheet.absoluteFill}
				source={getMediaSource(movie.poster)}
				resizeMode='cover'
			/>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6 }}
				start={[0, 0.3]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#090909']}
			/>
		</Animated.View>
	)
}

export default MovieBackground
