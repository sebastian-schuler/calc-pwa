import { Button, Container, Modal, SegmentedControl, Select } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiX } from 'react-icons/fi'
import { ConversionItem, GlobalNavItem } from 'types/conversion-types'
import { FavouriteType } from 'types/ui-types'

type Props = {
  opened: boolean
  close: () => void
  unitCategories: GlobalNavItem[]
  addFavourite: (unitCategory: string, type: FavouriteType, fromUnit: string | null, toUnit: string | null) => void
}

const AddFavouriteModal = ({ opened, close, unitCategories, addFavourite }: Props) => {

  const { t } = useTranslation(['common', 'simple-converter', 'index']);

  // States
  const [unitCategory, setUnitCategory] = useState<string | null>(null);
  const [type, setType] = useState<FavouriteType>('shortcut');
  const [fromUnit, setFromUnit] = useState<string | null>(null);
  const [toUnit, setToUnit] = useState<string | null>(null);
  const [units, setUnits] = useState<ConversionItem[]>([]);

  useEffect(() => {
    // Update units when unit category changes
    const newUnits = getUnits(unitCategories.find((unit) => unit.slug === unitCategory));
    setUnits(newUnits);
    return () => {
      setUnits([]);
    }
  }, [setUnits, unitCategory]);

  // Create data for unit select
  const unitSelectData = units.map((unit) => ({
    value: unit.id,
    label: t(unit.label, { ns: 'simple-converter' }) + (unit.append ? " " + t(unit.append, { ns: 'simple-converter' }) : "")
  }))

  return (
    <Modal opened={opened} onClose={close} size={'xl'} withCloseButton={false}>
      <Container>

        <div className='flex flex-col gap-6 my-8'>

          <div className='flex justify-between text-white'>
            <div className='font-semibold text-xl'>{t('index:addFavourite.header')}</div>
            <button
              className='flex relative h-8 w-8 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-700 active:translate-y-0.5 cursor-pointer'
              onClick={close}
            >
              <FiX size={18} />
            </button>
          </div>

          <div className='flex flex-col'>
            <div>{t('index:addFavourite.subheaderCategory')}</div>
            <Select
              placeholder={t('index:addFavourite.placeholderCategory')}
              value={unitCategory}
              onChange={(value) => setUnitCategory(value)}
              data={unitCategories.map((unit) => ({ value: unit.slug, label: t(unit.label) + "" }))}
            />
          </div>

          <div className='flex flex-col'>
            <div>{t('index:addFavourite.subheaderType')}</div>
            <SegmentedControl
              value={type}
              onChange={() => setType(type === 'shortcut' ? 'converter' : 'shortcut')}
              data={[
                { label: t('index:typeShortcut'), value: 'shortcut' },
                { label: t('index:typeConverter'), value: 'converter' },
              ]}
            />
          </div>

          <div className='flex flex-col'>
            <div>{t('index:addFavourite.subheaderFrom')}</div>
            <Select
              placeholder={t('index:addFavourite.placeholderFrom')}
              value={fromUnit}
              onChange={(value) => setFromUnit(value)}
              data={unitSelectData}
            />
          </div>

          {
            type === 'converter' &&
            (
              <div className='flex flex-col'>
                <div>{t('index:addFavourite.subheaderTo')}</div>
                <Select
                  placeholder={t('index:addFavourite.placeholderTo')}
                  value={toUnit}
                  onChange={(value) => setToUnit(value)}
                  data={unitSelectData}
                />
              </div>
            )
          }

          <div className='self-end'>
            <Button
              w={200}
              onClick={() => {
                addFavourite(unitCategory!, type, fromUnit, toUnit);
                close();
              }}
            >{t('index:addFavourite.buttonSave')}</Button>
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

export default AddFavouriteModal