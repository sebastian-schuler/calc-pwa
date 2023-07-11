import { ActionIcon, Group, TextInput } from '@mantine/core'
import Head from 'components/Head'
import { getSimpleConversionResult } from 'lib/calc/simple-conversion'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoCloseOutline } from 'react-icons/io5'
import { GlobalNavItem, ResultSection } from 'types/conversion-types'
import ResultList from './ResultList'
import UnitSelect from './UnitSelect'

type Props = {
  calcData: GlobalNavItem
  unitQuery: string | null
}

export default function SimpleCalculator({ calcData, unitQuery }: Props): ReactElement {

  // Set initial values
  const data = calcData.getData();
  const initialUnitId = unitQuery || data.initialUnit;
  const initialResult = getSimpleConversionResult(initialUnitId, "1", data);
  const title = calcData.label;

  // Set up state
  const { t } = useTranslation('common');
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState<string>(initialUnitId || '');
  const [results, setResults] = useState<ResultSection[] | undefined>(initialResult);

  // Find unit in section lists
  const activeUnit = data.sections.flatMap(s => s.items).find(u => u.id === fromUnit);

  /**
   * Update fromUnit when page is loaded
   */
  useEffect(() => {
    setFromUnit(initialUnitId || '');
    return () => { }
  }, [initialUnitId, setFromUnit])

  /**
   * Update results when value or fromUnit is changed
   */
  useEffect(() => {
    const res = getSimpleConversionResult(fromUnit, value, data);
    setResults(res);
    return () => { }
  }, [value, fromUnit, setResults, calcData]);

  /**
   * Focus input when page is loaded
   */
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <Head title={'Converter | ' + t(title)} />
      <div className='h-full'>
        <h1 className='text-3xl font-bold m-0'>{t(title)}</h1>
        <div className='flex flex-col gap-4 h-full'>
          <Group grow>
            <TextInput
              ref={inputRef}
              size='md'
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder={t('simple-converter.text-input.placeholder') || undefined}
              label={t('simple-converter.text-input.label')}
              spellCheck={false}
              rightSection={
                value.length > 0 && (
                  <ActionIcon onClick={() => setValue("")}>
                    <IoCloseOutline size={20} />
                  </ActionIcon>
                )
              }
              onKeyDown={(e) => {
                if (activeUnit && activeUnit.isInputValid) {
                  if (!e.ctrlKey && e.code !== 'Backspace' && !activeUnit.isInputValid(e.key)) {
                    e.preventDefault();
                    // TODO: Show error message
                  }
                }
              }}
              onPaste={(e) => {
                // Check if input is valid
                if (activeUnit && activeUnit.isInputValid) {
                  const pasted = e.clipboardData.getData('text');
                  if (!activeUnit.isInputValid(pasted)) {
                    e.preventDefault();
                    // TODO: Show error message
                  }
                }
              }}
            />

            <UnitSelect
              label={t('simple-converter.unit-select.label')}
              placeholder={t('simple-converter.unit-select.placeholder')}
              nothingFound={t('simple-converter.unit-select.nothing-found')}
              value={fromUnit}
              onChange={setFromUnit}
              data={data.sections}
              setInputValue={setValue}
              shouldClearInputOnUnitChange={data.options?.shouldClearInputOnUnitChange}
            />
          </Group>

          <ResultList
            sections={results}
            setFromUnit={setFromUnit}
            setInputValue={setValue}
            shouldClearInputOnUnitChange={data.options?.shouldClearInputOnUnitChange}
          />
        </div>
      </div>
    </>
  )
}
