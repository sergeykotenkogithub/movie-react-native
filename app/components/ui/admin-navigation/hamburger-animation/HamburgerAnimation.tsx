import { FC } from 'react'
import { Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { useHamburgerAnimation } from './useHamburgerAnimation'

const className = 'w-6 h-0.5 bg-[#ecf0f1]'

const HamburgerAnimation: FC<{ isShow: boolean }> = ({ isShow }) => {
	const animation = useHamburgerAnimation(isShow)
	return (
		<Animated.View style={animation.styleAnimation}>
			<Animated.View
				className={className}
				style={animation.transformFirstLineAnimation}
			/>
			<Animated.View
				className={className}
				style={animation.widthSecondLineAnimated}
			/>
			<Animated.View
				className={className}
				style={animation.transformThirdLineAnimation}
			/>
		</Animated.View>
	)
}

export default HamburgerAnimation
