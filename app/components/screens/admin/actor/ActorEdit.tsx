import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'

import { IActorEditInput } from '@/shared/types/actor.interface'

import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IActorEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit actor' isBackButton />
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

export default ActorEdit
