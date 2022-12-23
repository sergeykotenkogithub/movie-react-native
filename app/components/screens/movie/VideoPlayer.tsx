import { Audio, Video } from 'expo-av'
import { ResizeMode } from 'expo-av/build/Video.types'
import { FC, useEffect, useRef } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/ui'

import { getMediaSource } from '@/utils/getMediaSource'

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	const videoRef = useRef<Video>(null)

	useEffect(() => {
		const enableAudio = async () => {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				playsInSilentModeIOS: true,
				staysActiveInBackground: false,
				shouldDuckAndroid: false
			})

			await videoRef.current?.stopAsync()
		}
		let ignore = enableAudio()
	}, [])

	return (
		<>
			<Button
				icon='play'
				className='mb-6'
				onPress={async () => {
					await videoRef.current?.presentFullscreenPlayer()
					await videoRef.current?.playAsync()
				}}
			>
				Watch movie
			</Button>
			<View>
				<Video
					ref={videoRef}
					source={getMediaSource(video)}
					style={{ height: 180 }}
					// className='mb-5 w-full hidden h-full'
					className='mb-52 w-full hidden h-full'
					// className='mb-5 w-full hidden h-full min-h-full'
					shouldPlay
					useNativeControls
					resizeMode={ResizeMode.CONTAIN}
					// videoHeight={}
				/>
			</View>
		</>
	)
}

export default VideoPlayer
