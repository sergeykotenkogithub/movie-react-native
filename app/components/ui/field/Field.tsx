import cn from 'clsx'
import { FC } from 'react'
import { PropsWithChildren } from 'react'
import { Text, TextInput, View } from 'react-native'

import { IField } from './field.interface'

const Field: FC<IField> = ({ className }) => {
	return (
		<TextInput className={cn('bg-black py-3 px-3 color-white', className)} />
	)
}

export default Field
