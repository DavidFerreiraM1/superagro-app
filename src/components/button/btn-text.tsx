import React from 'react';
import {ContentText} from './styles';
import {BtnContentTextProps} from './types';

type Props = BtnContentTextProps;

export function BtnContentText(props: Props) {
  return <ContentText {...props}>{props.children}</ContentText>;
}
