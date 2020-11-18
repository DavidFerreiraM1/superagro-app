import {ReactNode} from 'react';

export interface StyleProps {
  variant?: 'contained' | 'text' | undefined;
  color?: 'brand-primary' | 'brand-secondary' | undefined;
  children?: ReactNode | undefined;
}
