import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

import { IContext, TypeUserState } from './auth.provider.interface'

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let IsMounted = true
		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()
				if (accessToken) {
					const user = await getUserFromStorage()
					if (IsMounted) setUser(user)
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}
		let ignore = checkAccessToken()
		return () => {
			IsMounted = false
		}
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
