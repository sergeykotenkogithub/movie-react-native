import { AxiosError, AxiosResponse } from 'axios'
import Toast from 'react-native-toast-message'

export const request = async <T>() => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	const onError = (error: AxiosError<T>) => {
		Toast.show({
			type: 'error'
		})
	}
}
