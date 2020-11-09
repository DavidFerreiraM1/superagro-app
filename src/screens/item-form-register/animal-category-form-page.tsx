/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {ButtonSelectCategory} from '../../components/dashboard';
import {FormPage} from './form-page';
import {ContentScreen, SelectFormArea, SelectFormLabel} from './styles';
import {FormRegisterContext} from './form-context';

export function AnimalCategoryFormPage(props: StackHeaderProps) {
  const {setFormValues} = useContext(FormRegisterContext);

  return (
    <FormPage>
      <ContentScreen style={{justifyContent: 'center'}}>
        <SelectFormArea>
          <SelectFormLabel>Selecione uma categoria</SelectFormLabel>
          <ButtonSelectCategory
            typeSelect="swine"
            onPress={() => {
              setFormValues('tipoAnimal', 'swine');
              props.navigation.push('name');
            }}
          />
          <ButtonSelectCategory
            typeSelect="poultry"
            onPress={() => {
              setFormValues('tipoAnimal', 'poultry');
              props.navigation.push('name');
            }}
          />
        </SelectFormArea>
      </ContentScreen>
    </FormPage>
  );
}
