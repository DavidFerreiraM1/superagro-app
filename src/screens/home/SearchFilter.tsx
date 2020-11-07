import React, {ReactNode} from 'react';
import {FilterBackgroundBox} from './styles';

interface Props {
  children: ReactNode | undefined;
}

export function SearchFilter(props: Props) {
  return <FilterBackgroundBox>{props.children}</FilterBackgroundBox>;
}
