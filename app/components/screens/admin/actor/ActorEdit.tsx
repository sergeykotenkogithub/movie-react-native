import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'

import { AdminNavigation, Button, Field, Layout, Loader } from '@/components/ui'
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'

import { IActorEditInput } from '@/shared/types/actor.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IActorEditInput>({
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
						<ScrollView showsVerticalScrollIndicator={false}>
							<Field<IActorEditInput>
								control={control}
								name='name'
								placeholder='Enter name'
								rules={{
									required: 'Name is required!'
								}}
							/>

							<SlugWrapper
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							>
								<Field<IActorEditInput>
									control={control}
									name='slug'
									placeholder='Enter slug'
									rules={{
										required: 'Slug is required!'
									}}
								/>
							</SlugWrapper>

							<Controller
								control={control}
								name='photo'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder={'actors'}
										placeholder='Photo'
									/>
								)}
								rules={{
									required: 'Photo is required!'
								}}
							/>

							<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
								Update
							</Button>
						</ScrollView>
					</>
				)}
			</View>
		</Layout>
	)
}

export default ActorEdit
