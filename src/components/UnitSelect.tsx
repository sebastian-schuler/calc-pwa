import { Group, Select, SelectProps, createStyles } from '@mantine/core';
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ConversionSection } from 'types/conversion-types';

const useStyles = createStyles((theme) => ({
  item: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,

    '&[data-selected]': {
      '&, &:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[4],
        color: 'black',
      },
    },
  },
  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,

    '&:after': {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[6],
    },
  },
}));

type Props = {
  label: string
  placeholder: string
  nothingFound: string
  data: ConversionSection[]
  setInputValue: (value: string) => void
  value: string
  onChange: (value: string) => void
  props?: SelectProps
  shouldClearInputOnUnitChange?: boolean
}

const UnitSelect = ({ label, placeholder, nothingFound, data, onChange, setInputValue, value, props, shouldClearInputOnUnitChange }: Props) => {

  const { classes } = useStyles();
  const { t } = useTranslation('simple-converter');

  const getOptions = (sections: ConversionSection[]) => {
    let res = [];
    for (const section of sections) {
      for (const item of section.items) {
        const label = t(item.label);
        const append = item.append ? t(item.append) : undefined;
        res.push({
          value: item.id,
          label: item.append ? (label + ' ' + append) : label,
          group: section.label ? t(label) : '',
          append: append,
          short: item.short ? t(item.short) : item.short,
        });
      }
    }
    return res;
  }

  return (
    <div>
      <Select
        size='md'
        value={value}
        onChange={(newValue) => {
          // Option to clear input if unit changes
          if (shouldClearInputOnUnitChange) {
            setInputValue("");
          }
          onChange(newValue || '');
        }}
        label={label}
        placeholder={placeholder}
        itemComponent={SelectItem}
        data={getOptions(data)}
        searchable
        maxDropdownHeight={500}
        nothingFound={nothingFound}
        spellCheck={false}
        classNames={{
          item: classes.item,
          separatorLabel: classes.separatorLabel,
        }}
        {...props}
      />
    </div>
  )
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string
  short: string
  append: string
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(({ label, short, append, ...others }: ItemProps, ref) => (
  <Group spacing={'sm'} ref={ref} {...others}>
    <div className='font-bold'>{short}</div>
    <div className='opacity-90'>{label}</div>
  </Group>
)
);

export default React.memo(UnitSelect);