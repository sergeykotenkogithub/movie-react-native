import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader, MovieCatalog } from '@/components/ui'

import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}

export default Favorites
