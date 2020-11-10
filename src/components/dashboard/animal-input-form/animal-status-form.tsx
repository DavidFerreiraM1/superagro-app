/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {BtnContentText, BtnSelect} from '../..';
import Arrow from '../../../assets/icons/arrow.svg';
import {SelectFormArea} from './styles';

interface Props {
  onPressValue: (value: string) => void;
}

export function AnimalStatusForm(props: Props) {
  return (
    <SelectFormArea>
      <BtnSelect
        onPress={() => {
          props.onPressValue('vendido');
        }}>
        <BtnContentText>Vendido</BtnContentText>
        <Arrow height={16} width={16} />
      </BtnSelect>
      <BtnSelect
        onPress={() => {
          props.onPressValue('descartado');
        }}>
        <BtnContentText>Descartado</BtnContentText>
        <Arrow height={16} width={16} />
      </BtnSelect>
    </SelectFormArea>
  );
}
