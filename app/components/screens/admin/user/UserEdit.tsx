import ExpoCheckbox from 'expo-checkbox'
import { FC } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'

import { IAuthFormData } from '@/shared/types/auth.interface'
import { IUserEditInput } from '@/shared/types/user.interface'

import { getColor } from '@/config/colors.config'

import AuthField from '../../auth/AuthField'

import { useUserEdit } from './useUserEdit'

const UserEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IUserEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit user' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthField control={control as unknown as Control<IAuthFormData>} />
						<Controller
							control={control}
							name='isAdmin'
							render={({ field: { onChange, value } }) => (
								<Pressable
									onPress={() => onChange(!value)}
									className='my-5 w-40 flex-row items-center'
								>
									<ExpoCheckbox
										// @ts-ignore
										value={value}
										onValueChange={onChange}
										color={value ? getColor('primary') : undefined}
									/>
									<Text className='underline text-white text-base ml-2.5'>
										{/* {value ? 'Make it regular user' : 'Make it admin'} */}
										Admin rights
									</Text>
								</Pressable>
							)}
						/>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	)
}

export default UserEdit
