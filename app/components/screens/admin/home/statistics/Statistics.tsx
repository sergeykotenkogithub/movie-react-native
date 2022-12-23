import { FC } from 'react'
import { Text, View } from 'react-native'

import CountUsers from './CountUsers'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
	return (
		<View className='flex items-stretch'>
			<CountUsers />
			<PopularMovies />
		</View>
	)
}

export default Statistics
