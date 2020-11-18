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
      props.navigation.navigate('form-farm-name');
    } else {
      setError('As senhas não são correspondentes');
    }
  };

  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          secureTextEntry
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
