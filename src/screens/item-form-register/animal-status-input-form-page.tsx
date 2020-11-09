/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {BtnContentText, BtnSelect} from '../../components';
import Arrow from '../../assets/icons/arrow.svg';
import {ContentScreen, SelectFormArea} from './styles';
import {FormPage} from './form-page';

export function AnimalStatusFormPage(props: StackHeaderProps) {
  return (
    <FormPage>
      <ContentScreen style={{justifyContent: 'center'}}>
        <SelectFormArea>
          <BtnSelect
            onPress={() => {
              props.navigation.navigate('register-final-staging');
            }}>
            <BtnContentText>Vendido</BtnContentText>
            <Arrow height={16} width={16} />
          </BtnSelect>
          <BtnSelect
            onPress={() => {
              props.navigation.navigate('register-final-staging');
            }}>
            <BtnContentText>Descartado</BtnContentText>
            <Arrow height={16} width={16} />
          </BtnSelect>
        </SelectFormArea>
      </ContentScreen>
    </FormPage>
  );
}
