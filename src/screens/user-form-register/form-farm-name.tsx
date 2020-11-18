/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {UserFormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';
import {isEmpty} from '../../core/validations';

export function FormFarmName(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(UserFormRegisterContext);
  const [error, setError] = useState('');
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe um nome para sua granja"
          value={values.farmName}
          onChangeText={(v) => setFormValues('farmName', v)}
        />
        <ErrorMsgBox>
          <ErrorMsgText>{error}</ErrorMsgText>
        </ErrorMsgBox>
      </ContentScreen>
      <BottomControl
        back={() => {
          setError('');
          return props.navigation.goBack();
        }}
        next={() => {
          if (!isEmpty(values.farmName)) {
            return setError('Campo inválido');
          }
          setError('');
          return props.navigation.navigate('register-final-stage');
        }}
      />
    </FormPage>
  );
}
