import { FC } from 'react'
import { Text, View } from 'react-native'

import {
	AdminNavigation,
	AdminTable,
	AdminTableHeader,
	Layout
} from '@/components/ui'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { control, isLoading, data, deleteAsync } = useUsers()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Users' />
			<AdminTableHeader control={control} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default UserList
