import { FC } from 'react'
import { Control } from 'react-hook-form'
import { Text, View } from 'react-native'

import { ISearchFormData } from '@/components/screens/search/search.interface'

import Field from '../../form-elements/field/Field'

import AdminCreateButton from './AdminCreateButton'

interface IAdminHeader {
	onPress?: () => void
	control: Control<ISearchFormData>
}

const AdminTableHeader: FC<IAdminHeader> = ({ control, onPress }) => {
	return (
		<View className='flex-row items-center justify-between mb-3'>
			<View style={{ width: onPress ? '82%' : '100%' }}>
				<Field<ISearchFormData>
					placeholder='Type something...'
					control={control}
					name='searchTerm'
					keyboardType='web-search'
				></Field>
			</View>
			{onPress && <AdminCreateButton onPress={onPress} />}
		</View>
	)
}

export default AdminTableHeader
