/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {AnimalCategoryForm} from '../../components/dashboard';
import {FormPage} from './form-page';
import {ContentScreen, SelectFormArea} from './styles';
import {FormRegisterContext} from '../../context';

export function AnimalCategoryFormPage(props: StackHeaderProps) {
  const {setFormValues} = useContext(FormRegisterContext);

  return (
    <FormPage>
      <ContentScreen style={{justifyContent: 'center'}}>
        <SelectFormArea>
          <AnimalCategoryForm
            onPressValue={(v) => {
              setFormValues('tipoAnimal', v);
              props.navigation.navigate('name');
            }}
          />
        </SelectFormArea>
      </ContentScreen>
    </FormPage>
  );
}
