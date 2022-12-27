import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { ViewStyle } from 'react-native'
import { ItemType } from 'react-native-dropdown-picker'

export interface IDropdown {
	options?: ItemType<any>[]
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	error?: FieldError
	style?: ViewStyle
}
