import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { UserService } from '@/services/user.service'

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess({ email }) {
			setValue('email', email)
		}
	})

	const { mutateAsync } = useMutation(
		['update profile'],
		(data: IAuthFormData) => UserService.updateProfile(data),
		{
			onSuccess() {
				Toast.show({
					text1: 'Update profile',
					text2: 'update was successful',
					type: 'success'
				})
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
