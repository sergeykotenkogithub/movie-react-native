import { FieldError } from 'react-hook-form'
import { ViewStyle } from 'react-native'

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: ViewStyle
	isNoImage?: boolean
	gradient?: [string, string]
}

export type TypeUploadMedia = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: () => Promise<void>
	isLoading: boolean
}
