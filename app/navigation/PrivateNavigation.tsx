import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text, View } from 'react-native'

import Auth from '@/components/screens/auth/Auth'
import Screen404 from '@/components/screens/system/Screen404'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { routes, userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: FC = () => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'fade_from_bottom',
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(route => (
						<Stack.Screen
							key={route.name}
							name={route.name}
							component={route.component}
						/>
					))
				) : (
					userRoutes.map(route => (
						<Stack.Screen
							key={route.name}
							name={route.name}
							component={route.component}
						/>
					))
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
