import React from 'react';
import { Icons, IconsProps } from '@storybook/components';
import { styled } from '@storybook/theming';

import { CallState, CallStates } from '../../types';
import localTheme from '../../theme';

export interface StatusIconProps extends IconsProps {
  status: CallState;
}

const {
  colors: {
    pure: { gray },
  },
} = localTheme;

const StyledStatusIcon = styled(Icons)<StatusIconProps>(({ theme, status }) => {
  const color = {
    [CallStates.DONE]: theme.color.positive,
    [CallStates.ERROR]: theme.color.negative,
    [CallStates.ACTIVE]: theme.color.secondary,
    [CallStates.PENDING]: gray[500],
  }[status];
  return {
    width: status === CallStates.PENDING ? 6 : 12,
    height: status === CallStates.PENDING ? 6 : 12,
    color,
    justifySelf: 'center',
  };
});

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const icon = {
    [CallStates.DONE]: 'check',
    [CallStates.ERROR]: 'stopalt',
    [CallStates.ACTIVE]: 'play',
    [CallStates.PENDING]: 'circle',
  }[status] as IconsProps['icon'];
  return <StyledStatusIcon status={status} icon={icon} />;
};