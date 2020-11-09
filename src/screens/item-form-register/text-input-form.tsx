import React from 'react';
import {TextInputProps} from 'react-native';
import {InputLabel, TextInputCustom} from './styles';

interface OwnProps {
  label: string;
}

type Props = OwnProps & TextInputProps;

export function TextInputForm(props: Props) {
  const {label, ...otherProps} = props;
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextInputCustom autoFocus {...otherProps} />
    </>
  );
}
