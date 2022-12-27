import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'

import {
	AdminNavigation,
	Button,
	Dropdown,
	Field,
	Layout,
	Loader,
	UploadField
} from '@/components/ui'
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper'

import { IMovieEditInput } from '@/shared/types/movie.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const MovieEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IMovieEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit movie' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: 100
						}}
					>
						<Field<IMovieEditInput>
							control={control}
							name='title'
							placeholder='Enter name'
							rules={{
								required: 'Name is required!'
							}}
						/>

						<SlugWrapper
							generate={() => {
								setValue('slug', generateSlug(getValues('title')))
							}}
						>
							<Field<IMovieEditInput>
								control={control}
								name='slug'
								placeholder='Enter slug'
								rules={{
									required: 'Slug is required!'
								}}
							/>
						</SlugWrapper>

						<Field<IMovieEditInput>
							control={control}
							name='parameters.country'
							placeholder='Enter country'
							rules={{
								required: 'Country is required!'
							}}
						/>

						<View className='flex-row flex-wrap justify-between'>
							<View style={{ width: '56%' }}>
								<Field<IMovieEditInput>
									placeholder='Enter duration (min.)'
									control={control}
									name='parameters.duration'
									rules={{
										required: 'Duration is required'
									}}
								/>
							</View>
							<View style={{ width: '40%' }}>
								<Field<IMovieEditInput>
									placeholder='Enter year'
									control={control}
									name='parameters.year'
									rules={{
										required: 'Year is required'
									}}
									keyboardType='number-pad'
								/>
							</View>
						</View>

						<Controller
							control={control}
							name='genres'
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={genres}
									isMulti
									error={error}
									style={{
										zIndex: 11
									}}
								/>
							)}
							rules={{
								required: 'Please select at least one genre!'
							}}
						/>

						<Controller
							name='actors'
							control={control}
							rules={{
								required: 'Please dropdown at least one actor!'
							}}
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={actors}
									isMulti
									error={error}
								/>
							)}
						/>

						<Controller
							control={control}
							name='poster'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Poster'
								/>
							)}
							rules={{
								required: 'Poster is required!'
							}}
						/>

						<Controller
							control={control}
							name='videoUrl'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Video'
									isNoImage
									gradient={['#4361a6', '#254584']}
								/>
							)}
							rules={{
								required: 'Video is required!'
							}}
						/>

						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</Layout>
	)
}

export default MovieEdit
