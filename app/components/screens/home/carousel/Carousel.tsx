import { Platform } from 'expo-modules-core'
import { FC, useRef } from 'react'
import { Animated, FlatList, Text, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

import CarouselItem from './carousel-item/CarouselItem'
import { EMPTY_ITEM_SIZE, ITEM_SIZE } from './carousel.constants'

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	const scrollX = useRef(new Animated.Value(0)).current
	return (
		<View>
			<Animated.FlatList
				data={[
					{ _id: 'first' } as IMovie,
					...movies,
					{ _id: 'last' } as IMovie
				]}
				keyExtractor={item => item._id}
				showsHorizontalScrollIndicator={false}
				horizontal
				bounces={false}
				renderToHardwareTextureAndroid
				contentContainerStyle={{
					alignItems: 'center'
				}}
				scrollEventThrottle={16}
				// интервал через сколько прокручивать, листает по элементу
				snapToInterval={ITEM_SIZE}
				snapToAlignment='start'
				// скорость прокрутки
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.92}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				renderItem={({ item: movie, index }) =>
					movie?.slug ? (
						<CarouselItem movie={movie} index={index} scrollX={scrollX} />
					) : (
						<View
							style={{
								width: EMPTY_ITEM_SIZE
							}}
						/>
					)
				}
			/>
		</View>
	)
}

export default Carousel
