/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		// fontFamily: {
		// 	sans: ['Inter', ..._theme.fontFamily.sans]
		// },
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FFA52E',
					100: '#FFF4E5',
					200: '#FFE0B8',
					300: '#FFCC8A',
					400: '#FFB95C',
					500: '#FFA52E',
					600: '#FF9100',
					700: '#995700',
					800: '#663A00',
					900: '#331D00'
				},
				dark: {
					DEFAULT: '#373A40',
					100: '#C1C2C5',
					200: '#A6A7AB',
					300: '#909296',
					400: '#5c5f66',
					500: '#373A40',
					600: '#2C2E33',
					700: '#25262b',
					800: '#1A1B1E',
					900: '#141517',
					950: '#101113'
				}
			}
		}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
}
export default config
