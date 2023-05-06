import { AppShell } from '@mantine/core';
import Boundary from 'components/Boundary';
import React from 'react';
import { GlobalNavCategory } from 'types/conversion-types';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

type Props = {
  children: React.ReactNode
  categories: GlobalNavCategory[]
  toggle: () => void
  close: () => void
  opened: boolean
}

const Shell = ({ children, categories, opened, toggle, close }: Props) => {

  return (
    <AppShell
      padding={'lg'}
      navbar={<AppNavbar categories={categories} opened={opened} close={close} />}
      header={<AppHeader opened={opened} toggle={toggle} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Boundary py={'lg'}>
        {children}
      </Boundary>
    </AppShell>
  )
}

export default Shell