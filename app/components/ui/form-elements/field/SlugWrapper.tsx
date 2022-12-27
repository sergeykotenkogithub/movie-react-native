import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

const SlugWrapper: FC<PropsWithChildren<{ generate: () => void }>> = ({
	children,
	generate
}) => {
	return (
		<View>
			{children}
			<Pressable
				className='absolute top-5 right-3 cursor-pointer rounded-lg py-0.5 px-2 border-gray-500 bg-gray-500'
				onPress={generate}
			>
				<Text className='uppercase text-white'>generate</Text>
			</Pressable>
		</View>
	)
}

export default SlugWrapper
