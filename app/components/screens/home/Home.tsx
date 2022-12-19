import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

import Button from '@/components/ui/button/Button'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Auth from '../auth/Auth'

const Home: FC = () => {
	// const { navigate } = useTypedNavigation()
	return (
		<View className='mt-10'>
			<Text className='text-white'>Home</Text>
			{/* <TextInput /> */}
			{/* <TextInput /> */}
			{/* <Pressable onPress={() => navigate('Auth')}>
				<Text style={{ color: 'white' }}>Go to login</Text>
			</Pressable> */}
			{/* <Auth /> */}

			{/* <Button /> */}
		</View>
	)
}

export default Home
