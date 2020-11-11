/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React, {useContext, useEffect} from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { Keyboard } from 'react-native';
import {ContentScreen} from './styles';

import {FormPage} from './form-page';
import {FormRegisterContext} from '../../context';
import { PhaseProductionForm } from '../../components/dashboard';

export function PhaseProductionFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const animalTypeValue = values.tipoAnimal;

  useEffect(() => {
    Keyboard.dismiss()
  }, []);
  
  return (
    <FormPage>
      <ContentScreen style={{ paddingBottom: 0 }}>
        <PhaseProductionForm
          animalType={animalTypeValue}
          onPressValue={(v) => {
            console.log(v)
            setFormValues('faseProducao', v);
            props.navigation.navigate('farm-type');
          }}
        />
      </ContentScreen>
    </FormPage>
  );
}
