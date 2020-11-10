/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from './form-context';
import {FormPage} from './form-page';
import {ContentScreen} from './styles';
import {TextInputForm} from '../../components/dashboard';

export function NameFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Insira um nome para este item"
          value={values.nome}
          onChangeText={(v) => setFormValues('nome', v)}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.navigate('animal-type');
        }}
        next={() => {
          props.navigation.navigate('location');
        }}
      />
    </FormPage>
  );
}
