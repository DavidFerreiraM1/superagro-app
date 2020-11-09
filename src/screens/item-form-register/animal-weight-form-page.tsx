/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from './form-context';
import {FormPage} from './form-page';
import {ContentScreen} from './styles';
import {TextInputForm} from './text-input-form';

export function AnimalWeightFormPAge(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe o peso do animal em KG"
          value={values.pesoCompra}
          onChangeText={(v) => setFormValues('pesoCompra', v)}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={() => {
          props.navigation.navigate('animal-species');
        }}
      />
    </FormPage>
  );
}
