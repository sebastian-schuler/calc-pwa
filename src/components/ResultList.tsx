import { ScrollArea, Text, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IoIosSwap } from 'react-icons/io';
import { ConversionResult, ResultSection } from 'types/conversion-types';

const useStyles = createStyles((theme) => ({
  container: {
    flex: '1 1 auto',
    height: '0px',
    paddingRight: theme.spacing.sm,
    paddingLeft: rem(20),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    borderRadius: theme.radius.md,
  },
}));

type Props = {
  sections?: ResultSection[]
  setFromUnit: (id: string) => void
  shouldClearInputOnUnitChange?: boolean
  setInputValue?: (value: string) => void
}

const ResultList = ({ sections = [], setFromUnit, shouldClearInputOnUnitChange, setInputValue }: Props) => {

  const { classes } = useStyles();

  // Function to handle unit change, clear input if option is enabled
  const handleUnitChange = (id: string) => {
    if (shouldClearInputOnUnitChange && setInputValue) {
      setInputValue('');
    }
    setFromUnit(id);
  }

  return (
    <ScrollArea type="auto" offsetScrollbars className={classes.container}>
      <div className='flex flex-col gap-4 py-6 pr-4'>
        {sections.map((section, index) => (
          <Section key={index}
            section={section}
            setFromUnit={handleUnitChange}
          />
        ))}
      </div>
    </ScrollArea>
  )
}

type SectionProps = {
  section: ResultSection
  setFromUnit: (id: string) => void
}

const Section = ({ section, setFromUnit }: SectionProps) => {

  const [collapsed, { toggle }] = useDisclosure(false);
  const { t } = useTranslation('simple-converter');

  return (
    <div>
      {
        section.label && (
          <div className='flex gap-2 items-center'>
            <button
              className='flex relative h-8 w-8 rounded-lg items-center justify-center border-none bg-transparent text-primary hover:bg-dark-700 active:translate-y-0.5 cursor-pointer'
              onClick={toggle}
            >
              {collapsed ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
            </button>
            <Text color='primary' weight={500}>{t(section.label)}</Text>
          </div>
        )
      }
      {
        collapsed ? undefined : (
          <div className='flex flex-col gap-1'>
            {
              section.items.map((item, index) => (
                <Result
                  key={item.unitId}
                  result={item}
                  setFromUnit={setFromUnit}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

const useStylesResult = createStyles((theme) => ({
  card: {
    flexGrow: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
    padding: `0 ${theme.spacing.md}`
  },
}));

type ResultProps = {
  result: ConversionResult
  setFromUnit: (id: string) => void
}

const Result = ({ result, setFromUnit }: ResultProps) => {

  const { t } = useTranslation('simple-converter');
  const { classes } = useStylesResult();
  const [copiedValue, setCopiedValue] = useState('');
  const [collapsed, { toggle }] = useDisclosure(false);

  const handleCopyClick = (value: string) => {
    // navigator.clipboard.writeText(value);
    // setCopiedValue(value);
    // setIsCopyNotificationOpen(true);
    // window.clearTimeout(timerRef.current);
    // timerRef.current = window.setTimeout(() => {
    //     setIsCopyNotificationOpen(true);
    // }, 100);
  }

  return (
    <div className='flex gap-2 items-center'>
      <button className='flex relative h-8 w-8 rounded-lg items-center justify-center border-none bg-transparent hover:bg-dark-700 active:translate-y-0.5 cursor-pointer' onClick={() => setFromUnit(result.unitId)} >
        <IoIosSwap size={18} />
      </button>
      <div className={classes.card} >
        <div className='flex justify-between'>
          <div className='my-2 leading-normal'>
            <span className='font-bold pr-1'>{result.value}</span>
            <span className='text-primary'>{result.unitShort && t(result.unitShort)}{result.unitAppend && ' ' + t(result.unitAppend)}</span>
          </div>
          <div className='text-neutral-400 self-center leading-normal'>{t(result.unitLabel)}</div>
        </div>
      </div>
    </div>
  )
}

export default ResultList