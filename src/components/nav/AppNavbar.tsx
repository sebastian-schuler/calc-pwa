import { Accordion, Navbar, ScrollArea, UnstyledButton, createStyles, rem } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { useSpotlight } from '@mantine/spotlight';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalNavCategory } from 'types/conversion-types';

const useStyles = createStyles((theme) => ({
  section: {
    '&:not(:last-of-type)': {
      borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },
  },

  searchCode: {
    lineHeight: 1,
    fontWeight: 700,
    fontSize: rem(10),
    padding: theme.spacing.xs,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]}`,
  },

  mainLink: {
    lineHeight: 1,
    display: 'flex',
    gap: theme.spacing.sm,
    alignItems: 'center',
    width: '100%',
    padding: `${rem(16)} ${rem(20)}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  unitLink: {
    lineHeight: 1,
    display: 'flex',
    gap: theme.spacing.sm,
    alignItems: 'center',
    width: '100%',
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    fontWeight: 500,
    color: theme.colors.primary[4],

    '&:hover': {
      color: theme.colors.primary[4],
    },
  },

  accordionItem: {
    border: 'none',
  }

}));

type Props = {
  categories: GlobalNavCategory[];
  opened: boolean;
  close: () => void;
}

const AppNavbar = ({ categories, opened, close }: Props) => {

  const { t } = useTranslation();
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const spotlight = useSpotlight();
  const os = useOs();

  const getOnClick = (href: string): void => {
    close();
    window.scrollTo(0, 0)
    navigate(href)
  }

  const links = [
    { label: 'Home', href: '/' },
  ];

  const linksRendered = links.map((link) => (
    <UnstyledButton
      key={link.href}
      onClick={() => getOnClick(link.href)}
      className={cx(classes.mainLink, { [classes.linkActive]: link.href === pathname })}
    >
      {link.label}
    </UnstyledButton>
  ));

  const activeSectionId = categories.find((category) => category.children.find((unit) => `/${unit.slug}` === pathname))?.id;

  const sectionsRendered = categories.map((category) => (
    <Accordion.Item key={category.id} value={category.id} className={classes.accordionItem}>
      <Accordion.Control>{t(category.label)}</Accordion.Control>
      <Accordion.Panel>
        {
          category.children.map((unit) => (
            <UnstyledButton
              key={unit.slug}
              onClick={() => getOnClick(`/${unit.slug}`)}
              className={cx(classes.unitLink, { [classes.linkActive]: `/${unit.slug}` === pathname })}
            >
              {unit.icon}
              {t(unit.label)}
            </UnstyledButton>
          ))
        }
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Navbar width={{ sm: 300 }} hiddenBreakpoint={'sm'} hidden={!opened}>

      <button
        type="button"
        className='flex items-center my-4 mx-4 py-3 px-4 justify-between rounded-lg bg-dark-700 hover:bg-dark-600 border-dark-500 border border-solid cursor-pointer'
        onClick={(e) => {
          spotlight.openSpotlight()
          e.preventDefault();
        }}
      >
        <div className='flex gap-3'>
          <FaSearch className='text-dark-300' />
          <div className='text-dark-400'>Search</div>
        </div>
        {
          (os === 'macos' || os === 'linux' || os === 'windows') && (
            <div>
              <div className='bg-dark-800 text-dark-100 font-mono py-1 px-2 rounded text-[0.625rem] leading-none'>Ctrl + K</div>
            </div>
          )
        }
      </button>

      <Navbar.Section className={classes.section}>
        {linksRendered}
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea}>
        <Accordion defaultValue={activeSectionId}>
          {sectionsRendered}
        </Accordion>
      </Navbar.Section>
    </Navbar>
  );
}

export default AppNavbar;