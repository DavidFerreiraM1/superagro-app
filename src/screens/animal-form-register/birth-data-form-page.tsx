/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {dateValidation} from '../../core/validations';
import {maskDate} from '../../core/mask-text';

export function BirthDateFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const [error, setError] = useState('');
  const checkValue = () => {
    if (!dateValidation(values.dataNascimento)) {
      return setError('Campo inválido');
    }
    setError('');
    return props.navigation.navigate('intrace-plantel');
  };
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Informe a data de nascimento"
          value={values.dataNascimento}
          onChangeText={(v) => setFormValues('dataNascimento', maskDate(v))}
        />
        <ErrorMsgBox>
          <ErrorMsgText>{error}</ErrorMsgText>
        </ErrorMsgBox>
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={checkValue}
      />
    </FormPage>
  );
}
