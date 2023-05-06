import { createStyles } from '@mantine/core';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GlobalNavCategory } from 'types/conversion-types';
import { useActions } from './AppSpotlightData';
import AppSpotlightItem from './AppSpotlightItem';

const filterActions = (query: string, actions: SpotlightAction[]) => {
  const res: SpotlightAction[] = [];
  res.push(
    ...actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase())).sort((a, b) => a.title.localeCompare(b.title))
  );
  res.push(
    ...actions.filter((action) => action.description?.toLowerCase().includes(query.toLowerCase()))
  )
  return res;
}

const useStyles = createStyles((theme) => ({
  actionsGroup: {
    fontSize: theme.fontSizes.md,
  }
}));

type Props = {
  children: React.ReactNode;
  close: () => void;
  categories: GlobalNavCategory[];
}

const AppSpotlight = ({ children, close, categories }: Props) => {

  const actions = useActions(categories, close);
  const { classes } = useStyles();

  return (
    <SpotlightProvider
      actions={actions}
      actionComponent={AppSpotlightItem}
      searchIcon={<FiSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
      highlightQuery={true}
      classNames={{
        actionsGroup: classes.actionsGroup
      }}
    // filter={(query, actions) => filterActions(query, actions)}
    >
      {children}
    </SpotlightProvider>
  )
}

export default React.memo(AppSpotlight);