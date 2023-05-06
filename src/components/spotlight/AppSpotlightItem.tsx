import { UnstyledButton, createStyles, rem } from "@mantine/core";
import { SpotlightActionProps } from "@mantine/spotlight";

const useStyles = createStyles((theme, _params: null) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    }),

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },
  },
}));

const AppSpotlightItem = ({ action, styles, classNames, hovered, onTrigger, highlightQuery, ...others }: SpotlightActionProps) => {

  const { classes } = useStyles(null, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <div>
        <div className="flex gap-3 items-center">
          {action.icon && action.icon}
          <div className="text-lg">{action.title}</div>
        </div>

        {action.description && (
          <div className="text-sm text-dark-200">
            {action.description}
          </div>
        )}

      </div>
    </UnstyledButton>
  );
}

export default AppSpotlightItem;