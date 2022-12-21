import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Animated } from 'react-native'

import { FavoriteButton, GenreList, Rating } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import { ITEM_SIZE, SPACING } from '../carousel.constants'

import { useItemAnimation } from './useItemAnimation'

interface ICarouselItem {
	index: number
	scrollX: Animated.Value
	movie: IMovie
}

const CarouselItem: FC<ICarouselItem> = ({ movie, index, scrollX }) => {
	const { navigate } = useTypedNavigation()
	const { rotate, opacity, scale, opacityElements } = useItemAnimation(
		index,
		scrollX
	)

	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View
				style={{
					padding: SPACING,
					transform: [{ rotate }, { scale }],
					opacity
				}}
				className={'items-center'}
			>
				<Pressable
					className='w-full relative'
					onPress={() => navigate('Movie', { slug: movie.slug })}
				>
					<View className='absolute z-1 right-2 top-2'>
						<FavoriteButton movieId={movie._id} />
					</View>
					<Image
						style={{
							height: ITEM_SIZE * 1.3,
							resizeMode: 'cover',
							borderWidth: 1,
							borderColor: 'white'
						}}
						className='w-full rounded-xl mb-2.5'
						source={getMediaSource(movie.poster)}
					/>
				</Pressable>
				<Animated.View
					className='items-center'
					style={{ opacity: opacityElements }}
				>
					<Rating rating={movie.rating} />
					<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
						<Text
							className='text-white text-3xl font-semibold opacity-95 mb-2.5'
							numberOfLines={1}
						>
							{movie.title}
						</Text>
					</Pressable>
					<GenreList genres={movie.genres} />
				</Animated.View>
			</Animated.View>
		</View>
	)
}

export default CarouselItem
