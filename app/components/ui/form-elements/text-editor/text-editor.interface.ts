import { FieldError } from 'react-hook-form'

export interface ITextEditor {
	onChange: (...event: any[]) => void
	value: string
	error?: FieldError
	placeholder?: string
}
