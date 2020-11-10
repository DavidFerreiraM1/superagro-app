/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React, {useContext} from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {ContentScreen} from './styles';

import {FormPage} from './form-page';

import {FormRegisterContext} from './form-context';
import {FarmTypeForm} from '../../components/dashboard';

export function FarmTypeFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const animalTypeValue = values.tipoAnimal;
  return (
    <FormPage>
      <ContentScreen style={{paddingBottom: 0}}>
        <FarmTypeForm
          animalType={animalTypeValue}
          onPressValue={(v) => {
            setFormValues('tipoGranja', v);
            props.navigation.navigate('animal-status');
          }}
        />
      </ContentScreen>
    </FormPage>
  );
}
