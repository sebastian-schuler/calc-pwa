import { MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import LoadingOrError from 'components/LoadingOrError'
import Shell from 'components/nav/Shell'
import AppSpotlight from 'components/spotlight/AppSpotlight'
import getCategories from 'lib/data/global/categories'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import appTheme from 'styles/theme'

const Home = lazy(async () => import('pages/Home'))
const SimpleCalcRouter = lazy(async () => import('pages/SimpleCalcRouter'))

export default function App(): ReactElement {

	const [opened, { toggle, close }] = useDisclosure(false);
	const categories = getCategories();

	return (
		<BrowserRouter>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...appTheme, colorScheme: 'dark' }}>
				<AppSpotlight
					close={close}
					categories={categories}
				>
					<Shell
						categories={categories}
						close={close}
						opened={opened}
						toggle={toggle}
					>
						<Suspense fallback={<LoadingOrError />}>
							<Routes>
								<Route path='/' element={<Home categories={categories} />} />
								{/* <Route path=':fruitName' element={<Details />} /> */}
								{/* <Route path='*' element={<SimpleCalcRouter />} /> */}
								<Route path=':calculator' element={<SimpleCalcRouter categories={categories} />} />
							</Routes>
						</Suspense>
					</Shell>
				</AppSpotlight>
			</MantineProvider>
		</BrowserRouter>
	)
}
