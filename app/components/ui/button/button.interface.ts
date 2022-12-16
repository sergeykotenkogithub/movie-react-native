import { PressableProps } from 'react-native'

import { TypeFeatherIconNames } from '@/shared/types/icon.types'

export interface IButton extends PressableProps {
	className?: string
	icon?: TypeFeatherIconNames
}
