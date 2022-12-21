import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader, MovieCatalog } from '@/components/ui'
import NotFound from '@/components/ui/NotFound'

import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					// @ts-ignore
					movies={movies}
					title={genre.name}
					description='Genre movies in excellent quality'
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
