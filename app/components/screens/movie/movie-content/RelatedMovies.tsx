import { FC } from 'react'
import { ListRenderItemInfo, Text, View } from 'react-native'

import { Loader, MovieItem } from '@/components/ui'
import HorizontalList from '@/components/ui/HorizontalList'

import { IMovie } from '@/shared/types/movie.interface'

import { useRelatedMovies } from './useRelatedMovies'

interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genreIds }) => {
	const { data, isLoading } = useRelatedMovies(genreIds, currentMovieId)
	if (isLoading) return <Loader />
	// @ts-ignore
	if (!data?.length) return null
	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5'>
				Related movies
			</Text>
			<HorizontalList
				snapToInterval={160}
				data={data}
				// @ts-ignore
				renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
					<MovieItem
						index={index}
						movie={movie}
						key={movie._id}
						className='mr-4'
						style={{
							width: 144,
							marginRight: 16
						}}
					/>
				)}
			/>
		</View>
	)
}

export default RelatedMovies
