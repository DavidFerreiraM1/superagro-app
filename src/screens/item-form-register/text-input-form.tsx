import React, {memo} from 'react';
import {TextInputProps, View} from 'react-native';
import {InputLabel, TextInputCustom} from './styles';

interface OwnProps {
  formKey: string;
  formKeyActive: string;
  label: string;
}

type Props = OwnProps & TextInputProps;

export function _TextInputForm(props: Props) {
  const {label, formKey, formKeyActive, ...otherProps} = props;

  const Component = () => {
    return (
      <>
        <InputLabel>{label}</InputLabel>
        <TextInputCustom autoFocus {...otherProps} />
      </>
    );
  };

  return <View>{formKey === formKeyActive && <Component />}</View>;
}

export const TextInputForm = memo(_TextInputForm);
