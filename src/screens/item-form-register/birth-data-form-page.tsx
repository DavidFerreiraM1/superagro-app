/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from './form-context';
import {FormPage} from './form-page';
import {ContentScreen} from './styles';
import {TextInputForm} from './text-input-form';

export function BirthDateFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe a data de nascimento"
          value={values.dataNascimento}
          onChangeText={(v) => setFormValues('dataNascimento', v)}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={() => {
          props.navigation.navigate('intrace-plantel');
        }}
      />
    </FormPage>
  );
}
