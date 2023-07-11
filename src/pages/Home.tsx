import { SimpleGrid } from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import Head from 'components/Head';
import AddFavouriteModal from 'components/favourites/AddFavouriteModal';
import QuickConverter from 'components/favourites/QuickConverter';
import RemoveFavouriteModal from 'components/favourites/RemoveFavouriteModal';
import Shortcut from 'components/favourites/Shortcut';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { GlobalNavCategory } from 'types/conversion-types';
import { Favourite, FavouriteType } from 'types/ui-types';

type Props = {
  categories: GlobalNavCategory[]
}

export default function HomePage({ categories }: Props): ReactElement {

  const { t } = useTranslation(['common', 'index']);

  // Add / remove classes for body
  document.body.classList.remove('overflow-hidden');

  // Get unit categories from sections
  const unitCategories = categories.map((category) => category.children).flat();

  // Favourites are stored in local storage
  const [favourites, setFavourites] = useLocalStorage<Favourite[]>({ key: 'favourites', defaultValue: [] });

  // Create favourite nodes
  const favouritesNodes = favourites.map((favourite, i) => {

    const category = unitCategories.find((category) => category.slug === favourite.category);

    if (favourite.type === 'shortcut' && category) {
      return (
        <Shortcut item={category} fromUnit={favourite.fromUnit} key={i} />
      )
    }

    if (favourite.type === 'converter' && category) {
      return (
        <QuickConverter item={category} fromUnit={favourite.fromUnit} toUnit={favourite.toUnit} key={i} />
      )
    }

    return undefined;
  });

  // States
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedRemove, { open: openRemove, close: closeRemove }] = useDisclosure(false);

  /**
   * Add favourite to storage
   * @param unitCategory 
   * @param type 
   * @param fromUnit 
   * @param toUnit 
   * @returns 
   */
  const handleAddFavourite = (unitCategory: string | null, type: FavouriteType, fromUnit: string | null, toUnit: string | null) => {
    if (!unitCategory) return;
    let newFavourite: Favourite;
    if (type === 'shortcut') {
      newFavourite = {
        type: 'shortcut',
        category: unitCategory,
        fromUnit: fromUnit,
      }

    } else {
      if (!fromUnit || !toUnit) return;
      newFavourite = {
        type: 'converter',
        category: unitCategory,
        fromUnit: fromUnit,
        toUnit: toUnit,
      }
    }
    setFavourites([...favourites, newFavourite]);
  }

  return (
    <>
      <Head title='Converter' />
      <div className='h-full'>
        <div className='flex mb-8 justify-between'>
          <h1 className='text-3xl font-bold m-0'>{t('index:homeHeader')}</h1>
          <div className='flex'>
            <button
              className='flex relative h-12 w-12 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-700 active:translate-y-0.5 cursor-pointer'
              onClick={openAdd}
              title={t('index:addFavourite.button')}
            >
              <IoIosAddCircleOutline size={28} />
            </button>
            <button
              className='flex relative h-12 w-12 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-700 active:translate-y-0.5 cursor-pointer'
              onClick={openRemove}
              title={t('index:removeFavourite.button')}
            >
              <IoIosRemoveCircleOutline size={28} />
            </button>
          </div>
        </div>
        <SimpleGrid
          breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { minWidth: 'xl', cols: 4 },
          ]}
        >
          {favouritesNodes}
        </SimpleGrid>
      </div>
      <AddFavouriteModal
        opened={openedAdd}
        close={closeAdd}
        unitCategories={unitCategories}
        addFavourite={handleAddFavourite}
      />
      <RemoveFavouriteModal
        opened={openedRemove}
        close={closeRemove}
        favourites={favourites}
        setFavourites={setFavourites}
        unitCategories={unitCategories}
      />
    </>
  )
}
