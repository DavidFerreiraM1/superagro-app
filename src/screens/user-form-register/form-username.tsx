/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';
import {isEmpty} from '../../core/validations';

export function FormName(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(UserFormRegisterContext);
  const [error, setError] = useState('');
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe um nome de usuário"
          value={values.username}
          onChangeText={(v) => setFormValues('username', v)}
        />
        <ErrorMsgBox>
          <ErrorMsgText>{error}</ErrorMsgText>
        </ErrorMsgBox>
      </ContentScreen>
      <BottomControl
        back={() => {
          setError('');
          props.navigation.goBack();
        }}
        next={() => {
          if (!isEmpty(values.username)) {
            return setError('Campo inválido');
          }
          setError('');
          return props.navigation.navigate('form-cpf');
        }}
      />
    </FormPage>
  );
}
