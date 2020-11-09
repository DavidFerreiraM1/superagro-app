/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {View} from 'react-native';
import {ButtonSelectCategory} from '../../components/dashboard';
import {SelectFormArea, SelectFormLabel} from './styles';

interface OwnProps {
  formKey: string;
  formKeyActive: string;
  onPressValue: (value: string) => void;
}

type Props = OwnProps;

export function CategoryInputSelect(props: Props) {
  const Component = () => {
    return (
      <SelectFormArea>
        <SelectFormLabel>Selecione uma categoria</SelectFormLabel>
        <ButtonSelectCategory
          typeSelect="swine"
          onPress={() => props.onPressValue('swine')}
        />
        <ButtonSelectCategory
          typeSelect="poultry"
          onPress={() => props.onPressValue('poultry')}
        />
      </SelectFormArea>
    );
  };

  return (
    <View>{props.formKey === props.formKeyActive ? <Component /> : null}</View>
  );
}
