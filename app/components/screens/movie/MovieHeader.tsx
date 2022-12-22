import { FC } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BlurButton, FavoriteButton, Rating } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

import { IMovieComponent } from './movie-page.interface'

const MovieHeader: FC<IMovieComponent> = ({ movie }) => {
	const { goBack } = useTypedNavigation()

	const { top } = useSafeAreaInsets()

	return (
		<View
			className='absolute left-0 top-0 w-full z-1 flex-row justify-between items-center px-6 pb-4'
			style={{ marginTop: -top, paddingTop: top + 6 }}
		>
			<Animated.View
				style={{ ...StyleSheet.absoluteFillObject }}
				className='bg-[#0D0404]'
			/>
			<BlurButton icon={'chevron-left'} iconSize={23} onPress={goBack} />
			<Animated.View className='items-center w-2/3'>
				<Text
					className='text-white font-semibold text-2xl mb-0.5 px-2'
					numberOfLines={1}
				>
					{movie.title}
				</Text>
				<Rating rating={movie.rating} size={14} />
			</Animated.View>
			<FavoriteButton movieId={movie._id} />
		</View>
	)
}

export default MovieHeader
