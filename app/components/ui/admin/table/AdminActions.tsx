import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Alert, Pressable, View } from 'react-native'

interface IAdminActions {
	editNavigate: () => void
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editNavigate, removeHandler }) => {
	return (
		<View className='flex-row items-center py-3 w-16 ml-2'>
			<Pressable onPress={editNavigate} className='mr-3'>
				<MaterialCommunityIcons
					name={'note-edit-outline'}
					color='#1DA64F'
					size={20}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					Alert.alert('Are you sure?', undefined, [
						{
							text: 'Yes',
							onPress: removeHandler
						},
						{ text: 'Cancel' }
					])
				}}
			>
				<MaterialCommunityIcons name={'close'} color='#AB2D2F' size={20} />
			</Pressable>
		</View>
	)
}

export default AdminActions
