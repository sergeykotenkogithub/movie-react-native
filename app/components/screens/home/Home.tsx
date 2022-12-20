import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'
import Button from '@/components/ui/button/Button'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Auth from '../auth/Auth'

import Carousel from './carousel/Carousel'
import { useGetAllMovies } from './useGetAllMovies'

const Home: FC = () => {
	const { movies, isLoading } = useGetAllMovies()
	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
		</Layout>
	)
}

export default Home
