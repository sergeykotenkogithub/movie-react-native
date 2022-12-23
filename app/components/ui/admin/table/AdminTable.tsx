import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Loader from '../../Loader'

import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems = []
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				<AdminTableHeader headerItems={headerItems} />
				{isLoading ? (
					<Loader />
				) : tableItems?.length ? (
					<ScrollView>
						{tableItems.map(tableItem => (
							<AdminTableItem
								key={tableItem._id}
								removeHandler={() => removeHandler(tableItem._id)}
								tableItem={tableItem}
							/>
						))}
					</ScrollView>
				) : (
					<Text>Element not found</Text>
				)}
			</View>
		</ScrollView>
	)
}

export default AdminTable
