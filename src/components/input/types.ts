import {ReactNode} from 'react';

export interface StyleProps {
  variant: 'contained' | 'text';
  color?: 'brand-primary' | 'brand-secondary' | undefined;
  children?: ReactNode | undefined;
}
