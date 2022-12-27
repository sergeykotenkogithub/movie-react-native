import { useMutation } from '@tanstack/react-query'
import { launchImageLibraryAsync } from 'expo-image-picker'
import { MediaTypeOptions } from 'expo-image-picker/build/ImagePicker.types'
import { useCallback, useMemo, useState } from 'react'

import { MediaService } from '@/services/media.service'

import { TypeUploadMedia } from './upload-field.interface'

export const useUploadMedia: TypeUploadMedia = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		['upload file'],
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess(data) {
				onChange(data[0].url)
			}
		}
	)

	const uploadFile = useCallback(async () => {
		setIsLoading(true)

		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.All,
			allowsEditing: false,
			quality: 1
		})

		if (result.canceled) {
			setIsLoading(false)
			return
		}

		console.log

		const localUri = result.assets[0].uri
		const filename = localUri?.split('/').pop() || ''

		const match = /\.(\w+)$/.exec(filename)
		const type = match ? `image/${match[1]}` : `image`

		const formData = new FormData()
		formData.append('file', {
			uri: localUri,
			name: filename,
			type
		} as unknown as Blob)

		await mutateAsync(formData)

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [mutateAsync])

	return useMemo(() => ({ isLoading, uploadFile }), [uploadFile, isLoading])
}
