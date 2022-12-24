import { FC } from 'react'
import { Text, View } from 'react-native'

import {
	AdminNavigation,
	AdminTable,
	AdminTableHeader,
	Layout
} from '@/components/ui'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useGenres()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Genres' />
			<AdminTableHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default GenreList
