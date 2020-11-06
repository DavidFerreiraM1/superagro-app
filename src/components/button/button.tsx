import React from 'react';
import {TouchableProps} from 'react-native-svg';
import {Background, Root} from './styles';
import {StyleProps, ButtonProps} from './types';

type Props = StyleProps & ButtonProps & TouchableProps;

export function Button(props: Props) {
  return (
    <Root {...props}>
      <Background {...props}>{props.children}</Background>
    </Root>
  );
}
