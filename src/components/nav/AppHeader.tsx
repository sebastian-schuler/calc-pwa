import { Burger, Header, MediaQuery } from '@mantine/core';
import { useTranslation } from 'react-i18next';

type Props = {
  opened: boolean;
  toggle: () => void;
}

const AppHeader = ({ opened, toggle }: Props) => {

  const { t } = useTranslation();

  const label = opened ? t('header-burger.close') : t('header-burger.open');

  return (
    <Header height={60}>

      <div className='flex justify-between h-full items-center px-12 md:px-5'>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={toggle} aria-label={label} h={'100%'} />
        </MediaQuery>
        <div className='text-2xl font-bold text-white'>
          {t('app-title')}
        </div>
      </div>

    </Header>
  )
}

export default AppHeader