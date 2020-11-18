/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {isEmpty} from '../../core/validations';

export function AnimalWeightFormPAge(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const [error, setError] = useState('');
  const checkValue = () => {
    if (!isEmpty(values.pesoCompra)) {
      return setError('Campo inválido');
    }
    setError('');
    return props.navigation.navigate('animal-species');
  };

  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          keyboardType="numeric"
          label="Informe o peso do animal em KG"
          value={values.pesoCompra}
          onChangeText={(v) => setFormValues('pesoCompra', v)}
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
