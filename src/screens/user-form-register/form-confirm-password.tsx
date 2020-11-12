/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';

export function FormConfirmPassword(props: StackHeaderProps) {
  const {values} = useContext(UserFormRegisterContext);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (value === values.password) {
      // continua
    } else {
      setError('As senhas não batem');
    }
  };

  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Confirme senha informada"
          value={value}
          onChangeText={(v) => setValue(v)}
        />
        <ErrorMsgBox>
          <ErrorMsgText>{error}</ErrorMsgText>
        </ErrorMsgBox>
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={submit}
      />
    </FormPage>
  );
}
