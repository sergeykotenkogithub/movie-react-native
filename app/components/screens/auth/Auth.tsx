import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'

import { Button, Loader } from '@/components/ui'
import DismissKeyboard from '@/components/ui/form-elements/field/DismissKeyboard'
import Field from '@/components/ui/form-elements/field/Field'

import { IAuthFormData } from '@/shared/types/auth.interface'

import AuthField from './AuthField'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)
	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {
		console.log(email, password)
	}

	const isLoading = false

	return (
		<DismissKeyboard className='bg-[#090909]'>
			<View className='mx-2 items-center justify-center h-full'>
				<View className='w-9/12'>
					<Text className='text-cente text-white text-4xl font-bold mb-2.5'>
						{isReg ? 'Register' : 'Auth'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthField control={control} isPassRequired />

							<Button onPress={handleSubmit(onSubmit)} icon='film'>
								Go to watch
							</Button>

							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-white opacity-30 text-right text-base mt-3'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}

export default Auth
