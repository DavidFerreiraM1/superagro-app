/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';

export function FormCpf(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(UserFormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe o seu cpf"
          value={values.cpf}
          onChangeText={(v) => setFormValues('cpf', v)}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={() => {
          props.navigation.navigate('form-password');
        }}
      />
    </FormPage>
  );
}
