/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';

export function FormPassword(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(UserFormRegisterContext);

  const [error, setError] = useState('');
  const validationPassword = () => {
    if (values.password === '') {
      return setError('Não pode ser vazio');
    }

    if (values.password.length < 6) {
      return setError('Senha deve ter 6 ou mais caractéres');
    }
    setError('');
    return props.navigation.navigate('form-confirm-password');
  };

  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          secureTextEntry
          label="Agora defina uma senha"
          value={values.password}
          onChangeText={(v) => setFormValues('password', v)}
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
        next={validationPassword}
      />
    </FormPage>
  );
}
