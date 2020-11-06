import {ReactNode} from 'react';

export interface StyleProps {
  variant: 'contained' | 'text';
  color?: 'action-primary' | 'action-secondary';
}

export interface ButtonProps {
  children: ReactNode | undefined;
}

export interface BtnContentTextProps {
  children: ReactNode | undefined;
  color?: 'action-primary' | 'action-secondary';
}
