import React from 'react';
import {TextInputProps} from 'react-native';
import {Background, Root, TextInput as TextInputStyled} from './styles';
import {StyleProps} from './types';

type Props = TextInputProps & StyleProps;

export function TextInput(props: Props) {
  return (
    <Root>
      <Background variant={props.variant} color={props.color}>
        {props.children ? props.children : <TextInputStyled {...props} />}
      </Background>
    </Root>
  );
}
