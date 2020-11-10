/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useContext} from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {ContentScreen} from './styles';
import {FormPage} from './form-page';
import {AnimalStatusForm} from '../../components/dashboard';
import {FormRegisterContext} from './form-context';

export function AnimalStatusFormPage(props: StackHeaderProps) {
  const {setFormValues} = useContext(FormRegisterContext);
  return (
    <FormPage>
      <ContentScreen style={{justifyContent: 'center'}}>
        <AnimalStatusForm
          onPressValue={(v) => {
            setFormValues('statusAnimal', v);
            props.navigation.navigate('register-final-staging');
          }}
        />
      </ContentScreen>
    </FormPage>
  );
}
