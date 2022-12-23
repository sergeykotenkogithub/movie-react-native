import { TypeMaterialIconNames } from '@/shared/types/icon.types'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface INavItem {
	icon: TypeMaterialIconNames
	title: string
	routeName: keyof TypeRootStackParamList
}
