import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { TypeRootStackParamList } from './navigation.types'
import { userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: '#090909'
					}
				}}
			>
				{userRoutes.map(route => (
					<Stack.Screen
						key={route.name}
						name={route.name}
						component={route.components}
					/>
				))}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
