import { ImageSourcePropType } from 'react-native'

import { SERVER_URL } from '@/config/api.config'

export const getMediaSource = (path: string): ImageSourcePropType => ({
	uri: SERVER_URL + path
})
