import { RouteProp, useRoute } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export const useTypedRoute = () => useRoute<RouteProp<TypeRootStackParamList>>()
