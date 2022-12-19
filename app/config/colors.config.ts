const colorConfig = {
	primary: '#BF3335',
	'gray.400': '#626262',
	yellow: '#FBC903'
}

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color]
