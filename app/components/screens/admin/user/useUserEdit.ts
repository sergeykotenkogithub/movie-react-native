import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { IUserEditInput } from '@/shared/types/user.interface'

import { UserService } from '@/services/user.service'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { params } = useTypedRoute<'UserEdit'>()
	const userId = params.id

	const { isLoading } = useQuery(
		['get user', userId],
		() => UserService.getById(userId),
		{
			onSuccess(data) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			enabled: !!userId
		}
	)

	const { invalidateQueries } = useQueryClient()

	const { mutateAsync } = useMutation(
		['update user'],
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update user',
					text2: 'update was successful'
				})

				await invalidateQueries(['search users'])
			}
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
