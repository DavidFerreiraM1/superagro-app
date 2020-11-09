/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {View} from 'react-native';
import {BtnContentText, BtnSelect} from '../../components';
import Arrow from '../../assets/icons/arrow.svg';
import {SelectFormArea} from './styles';

interface Props {
  formKey: string;
  formKeyActive: string;
  onPressValue: (value: string) => void;
}

export function StatusSelectType(props: Props) {
  const Component = () => {
    return (
      <SelectFormArea>
        <BtnSelect onPress={() => props.onPressValue('vendido')}>
          <BtnContentText>Vendido</BtnContentText>
          <Arrow height={16} width={16} />
        </BtnSelect>
        <BtnSelect onPress={() => props.onPressValue('vendido')}>
          <BtnContentText>Descartado</BtnContentText>
          <Arrow height={16} width={16} />
        </BtnSelect>
      </SelectFormArea>
    );
  };
  return (
    <View>{props.formKey === props.formKeyActive ? <Component /> : null}</View>
  );
}
