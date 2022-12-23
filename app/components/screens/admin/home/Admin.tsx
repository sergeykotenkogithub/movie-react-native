import { FC } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
		</Layout>
	)
}

export default Admin
