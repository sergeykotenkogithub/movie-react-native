import { FC } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'

const UserList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='User List' />
		</Layout>
	)
}

export default UserList
