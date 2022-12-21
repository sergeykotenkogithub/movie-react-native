import { PressableProps } from 'react-native'

import { TypeFeatherIconNames } from '@/shared/types/icon.types'

export interface IBlurButton extends PressableProps {
	className?: string
	icon?: TypeFeatherIconNames
	iconSize?: number
	color?: string
}
