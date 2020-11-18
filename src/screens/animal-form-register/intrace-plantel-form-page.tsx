/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {isEmpty} from '../../core/validations';
import {maskDate} from '../../core/mask-text';

export function IntracePlantelFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const [error, setError] = useState('');
  const checkValue = () => {
    if (!isEmpty(values.nome)) {
      return setError('Campo inválido');
    }
    setError('');
    return props.navigation.navigate('animal-weight');
  };
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          keyboardType="numeric"
          label="Quando ocorreu a entrada deste animal?"
          value={values.entradaPlantel}
          onChangeText={(v) => setFormValues('entradaPlantel', maskDate(v))}
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
