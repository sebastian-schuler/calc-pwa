import { Container, ContainerProps, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
}));

type Props = {
  children: React.ReactNode
} & ContainerProps

const Boundary = ({ children, ...props }: Props) => {

  const { classes } = useStyles();

  return (
    <Container h={'100%'} className={classes.container} {...props} >{children}</Container>
  )
}

export default Boundary