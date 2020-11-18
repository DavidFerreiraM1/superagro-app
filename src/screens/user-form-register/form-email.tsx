/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';
import {emailvalidation} from '../../core/validations';

export function FormEmail(props: StackHeaderProps) {
  const [error, setError] = useState('');
  const {values, setFormValues} = useContext(UserFormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe o seu email"
          value={values.email}
          onChangeText={(v) => setFormValues('email', v)}
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
          if (!emailvalidation(values.email)) {
            return setError('Formato de email inválido');
          }
          setError('');
          return props.navigation.navigate('form-password');
        }}
      />
    </FormPage>
  );
}
