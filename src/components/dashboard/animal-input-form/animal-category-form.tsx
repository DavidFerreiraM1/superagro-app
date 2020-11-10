/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {ButtonSelectCategory} from '..';
import {SelectFormArea, SelectFormLabel} from './styles';

interface Props {
  onPressValue: (value: string) => void;
}

export function AnimalCategoryForm(props: Props) {
  return (
    <SelectFormArea>
      <SelectFormLabel>Selecione uma categoria</SelectFormLabel>
      <ButtonSelectCategory
        typeSelect="swine"
        onPress={() => {
          props.onPressValue('swine');
        }}
      />
      <ButtonSelectCategory
        typeSelect="poultry"
        onPress={() => {
          props.onPressValue('poultry');
        }}
      />
    </SelectFormArea>
  );
}
