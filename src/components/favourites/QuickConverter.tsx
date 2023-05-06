import { TextInput, createStyles } from '@mantine/core'
import { calcSpecific } from 'lib/calc/simple-conversion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoOpenOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { GlobalNavItem } from 'types/conversion-types'

const useStyles = createStyles((theme) => ({
  root: {
    'input[type="text"], textarea': {
      backgroundColor: theme.colors.dark[4],
    }
  },
}));

type Props = {
  item: GlobalNavItem
  fromUnit: string | null
  toUnit: string | null
}

const QuickConverter = ({ item, fromUnit, toUnit }: Props) => {

  const { t } = useTranslation(['simple-converter', 'common']);
  const navigate = useNavigate();
  const { classes } = useStyles();

  // Get data
  const data = item.getData();
  const convItems = data.sections.map((section) => section.items).flat();
  const from = convItems.find((unit) => unit.id === fromUnit);
  const to = convItems.find((unit) => unit.id === toUnit);

  // State
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!from || !to) return;
    // Calculate result
    const newResult = calcSpecific(value, from, to, data);
    setResult(newResult || 'NaN');
    return () => { setResult('') }
  }, [value, setResult]);

  const handleOpen = () => {
    navigate(`/${item.slug}?unit=${fromUnit}`);
  }

  return (
    <div
      className="flex flex-col gap-2 py-4 px-6 rounded-xl bg-dark-700"
    >

      <div className='flex justify-between'>
        <div className='flex gap-3 text-white'>
          <div className='self-center'>{item.icon}</div>
          <div className='self-center text-lg'>{t(item.label, { ns: 'common' })}</div>
        </div>
        <button
          className='flex relative h-9 w-9 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-600 active:translate-y-0.5 cursor-pointer'
          onClick={handleOpen}
        >
          <IoOpenOutline size={18} />
        </button>
      </div>

      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        label={from && t(from.label)}
        placeholder='Enter value'
        classNames={{
          root: classes.root
        }}
      />

      <div className='flex flex-col gap-[1px]'>
        <div className='text-xs font-medium'>{to && t(to.label)}</div>
        <div className='p-2 text-md rounded-lg bg-dark-500 border border-solid border-dark-600'>{result}</div>
      </div>

    </div>
  )
}

export default QuickConverter