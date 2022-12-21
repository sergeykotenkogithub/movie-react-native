import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from './heading/Heading'

const NotFound: FC = () => {
	return (
		<View>
			<Heading title='404 - Page Not Found' />
		</View>
	)
}

export default NotFound
