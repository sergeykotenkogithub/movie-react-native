import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IGenre } from '@/shared/types/genre.interface'

const GenreList: FC<{ genres: IGenre[] }> = ({ genres }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='flex-row gap-3'>
			{genres.map(genre => (
				<Pressable
					onPress={() =>
						navigate('Genre', {
							slug: genre.slug
						})
					}
					key={genre._id}
					className='rounded-2xl bg-gray py-1.5 px-3'
				>
					<Text className='text-white'>{genre.name}</Text>
				</Pressable>
			))}
		</View>
	)
}

export default GenreList
