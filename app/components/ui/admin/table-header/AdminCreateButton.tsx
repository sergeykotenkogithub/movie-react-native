import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Pressable } from 'react-native'

const AdminCreateButton: FC<{ onPress: () => void }> = ({ onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				className='w-12 h-12 rounded-2xl items-center justify-center'
				colors={['#DC3F41', '#a6282b']}
			>
				<Feather name='plus' size={24} color='#fff' />
			</LinearGradient>
		</Pressable>
	)
}

export default AdminCreateButton
