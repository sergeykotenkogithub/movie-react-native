import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuItems } from './menu.data'
import { TypeNavigate } from './menu.interface'

interface IBottomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
	const { bottom } = useSafeAreaInsets()
	return (
		<View
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]'
			style={{ paddingBottom: bottom + 5 }}
		>
			{menuItems.map(item => (
				<MenuItem
					key={item.path}
					item={item}
					nav={nav}
					currentRoutes={currentRoute}
				/>
			))}
		</View>
	)
}

export default BottomMenu
