import { FC } from 'react'
import { Text, View } from 'react-native'

import {
	AdminNavigation,
	AdminTable,
	AdminTableHeader,
	Layout
} from '@/components/ui'

import { useActors } from './useActors'

const ActorList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useActors()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Actors' />
			<AdminTableHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name', 'Count movies']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default ActorList
