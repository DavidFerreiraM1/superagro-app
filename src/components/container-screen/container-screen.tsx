import React, {ReactNode} from 'react';
import {Root} from './styles';

interface Props {
  children: ReactNode | undefined;
}

export function ContainerScreen(props: Props) {
  return <Root>{props.children}</Root>;
}
