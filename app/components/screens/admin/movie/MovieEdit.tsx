import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'

import { IMovieEditInput } from '@/shared/types/movie.interface'

import { useMovieEdit } from './useMovieEdit'

const MovieEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit movie' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	)
}

export default MovieEdit
