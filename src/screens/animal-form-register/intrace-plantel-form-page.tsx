/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {BottomControl} from './bottom-control';
import {FormRegisterContext} from './form-context';
import {FormPage} from './form-page';
import {ContentScreen} from './styles';
import {TextInputForm} from '../../components/dashboard';

export function IntracePlantelFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  return (
    <FormPage>
      <ContentScreen>
        <TextInputForm
          label="Quando ocorreu a entrada deste animal?"
          value={values.entradaPlantel}
          onChangeText={(v) => setFormValues('entradaPlantel', v)}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={() => {
          props.navigation.navigate('animal-weight');
        }}
      />
    </FormPage>
  );
}
