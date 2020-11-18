/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from '../../context';
import {FormPage} from './form-page';
import {ContentScreen, ErrorMsgBox, ErrorMsgText} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {isEmpty} from '../../core/validations';

export function SpeciesFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const [error, setError] = useState('');
  const checkValue = () => {
    if (!isEmpty(values.raca)) {
      return setError('Campo inválido');
    }
    setError('');
    return props.navigation.navigate('tracking-code');
  };

  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Qual a espécie (raça) deste animal?"
          value={values.raca}
          onChangeText={(v) => setFormValues('raca', v)}
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
