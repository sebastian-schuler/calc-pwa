import { Button, Container, Modal } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { FiX } from 'react-icons/fi'
import { ConversionItem, GlobalNavItem } from 'types/conversion-types'
import { Favourite } from 'types/ui-types'

type Props = {
  opened: boolean
  close: () => void
  favourites: Favourite[]
  setFavourites: (favourites: Favourite[]) => void
  unitCategories: GlobalNavItem[]
}

const RemoveFavouriteModal = ({ opened, close, favourites, setFavourites, unitCategories }: Props) => {

  const { t } = useTranslation(['common', 'simple-converter', 'index']);

  const favouritesLocalized = favourites.map((favourite) => {

    const unitCategory = unitCategories.find((unit) => unit.slug === favourite.category);
    let fromUnitLabel = undefined;

    // If unit category is not found, return the favourite as it is
    if (!unitCategory) return {
      ...favourite,
      label: favourite.category,
      fromUnitLabel,
    };

    // If favourite is a converter, get the label of the from unit
    if (favourite.type === "converter") {

      const data = unitCategory.getData();
      for (const section of data.sections) {
        for (const item of section.items) {
          if (item.id === favourite.fromUnit) {
            fromUnitLabel = item.label;
          }
        }
      }

    }

    return {
      ...favourite,
      label: unitCategory?.label,
      fromUnitLabel,
    }
  });

  const handleRemove = (index: number) => {
    const newFavourites = [...favourites];
    newFavourites.splice(index, 1);
    setFavourites(newFavourites);
  }

  return (
    <Modal opened={opened} onClose={close} size={'xl'} withCloseButton={false}>
      <Container>

        <div className='flex flex-col gap-6 my-8'>

          <div className='flex justify-between text-white'>
            <div className='font-semibold text-xl'>{t('index:removeFavourite.header')}</div>
            <button
              className='flex relative h-8 w-8 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-700 active:translate-y-0.5 cursor-pointer'
              onClick={close}
            >
              <FiX size={18} />
            </button>
          </div>

          <div className='flex flex-col gap-2'>
            {
              favouritesLocalized.map((favourite, index) => (
                <div key={index} className='px-6 py-2 bg-dark-600 rounded-lg'>

                  <div className='flex justify-between'>

                    <div>
                      <div>{favourite.type}</div>
                      <div className='text-lg text-white'>
                        {t('' + favourite.label)} {favourite.fromUnitLabel && ` | ${t('simple-converter:' + favourite.fromUnitLabel)}`}
                      </div>
                    </div>

                    <button
                      className='px-6 rounded-lg border-none bg-dark-700 hover:bg-dark-600 cursor-pointer'
                      onClick={() => handleRemove(index)}
                    >{t('index:removeFavourite.buttonDelete')}</button>

                  </div>
                </div>
              ))
            }
          </div>

          <div className='self-end'>
            <Button
              w={200}
              onClick={close}
            >{t('index:removeFavourite.buttonDone')}</Button>
          </div>

        </div>
      </Container>
    </Modal >
  )
}

const getUnits = (category: GlobalNavItem | undefined): ConversionItem[] => {
  if (!category) return [];
  const data = category.getData();
  const units = data.sections.map((section) => section.items).flat();
  return units;
}

export default RemoveFavouriteModal