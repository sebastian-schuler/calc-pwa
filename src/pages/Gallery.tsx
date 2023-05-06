import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export default function GalleryPage(): ReactElement {

	const { t } = useTranslation('simple-converter');

	const { isLoading, isError, error, data } = useQuery(['fruits'], () => getFruits(''))
	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Vitamin' />
			<div>{t('converter-title')}</div>
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div>
		</>
	)
}
