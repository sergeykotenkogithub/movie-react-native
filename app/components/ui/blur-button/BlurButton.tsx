import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { BlurView } from 'expo-blur'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IBlurButton } from './blur-button.interface'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	color = '#fff',
	className,
	icon,
	iconSize = 21,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={cn(
					'w-12 h-12 items-center justify-center rounded-2xl overflow-hidden'
				)}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
