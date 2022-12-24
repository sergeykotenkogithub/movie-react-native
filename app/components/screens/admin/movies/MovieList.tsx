import { FC } from 'react'
import { Text, View } from 'react-native'

import {
	AdminNavigation,
	AdminTable,
	AdminTableHeader,
	Layout
} from '@/components/ui'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useMovies()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Movies' />
			<AdminTableHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'Rating']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default MovieList
