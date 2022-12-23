import {
	useAnimatedStyle,
	useDerivedValue,
	withTiming
} from 'react-native-reanimated'

export const useHamburgerAnimation = (isShow: boolean) => {
	const widthSecondLineAnimated = useAnimatedStyle(
		() => ({
			width: withTiming(isShow ? 0 : 24),
			marginVertical: 6.5
		}),
		[isShow]
	)

	const rotate = useDerivedValue(() => withTiming(isShow ? 45 : 0), [isShow])

	const transformFirstLineAnimation = useAnimatedStyle(
		() => ({
			transform: [
				{
					rotate: `${rotate.value}deg`
				},
				{
					translateY: withTiming(isShow ? 12 : 0)
				}
			]
		}),
		[isShow]
	)
	const transformThirdLineAnimation = useAnimatedStyle(
		() => ({
			transform: [
				{
					rotate: `-${rotate.value}deg`
				},
				{
					translateY: withTiming(isShow ? -12 : 0)
				}
			]
		}),
		[isShow]
	)

	const styleAnimation = useAnimatedStyle(
		() => ({
			transform: [
				{
					translateX: withTiming(isShow ? 8 : 0)
				}
			]
		}),
		[isShow]
	)

	return {
		styleAnimation,
		transformFirstLineAnimation,
		transformThirdLineAnimation,
		widthSecondLineAnimated
	}
}
