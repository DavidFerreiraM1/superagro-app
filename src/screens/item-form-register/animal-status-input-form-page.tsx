/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {BtnContentText, BtnSelect} from '../../components';
import Arrow from '../../assets/icons/arrow.svg';
import {ContentScreen, SelectFormArea} from './styles';
import {FormPage} from './form-page';

export function AnimalStatusFormPage() {
  return (
    <FormPage>
      <ContentScreen style={{justifyContent: 'center'}}>
        <SelectFormArea>
          <BtnSelect onPress={() => {}}>
            <BtnContentText>Vendido</BtnContentText>
            <Arrow height={16} width={16} />
          </BtnSelect>
          <BtnSelect onPress={() => {}}>
            <BtnContentText>Descartado</BtnContentText>
            <Arrow height={16} width={16} />
          </BtnSelect>
        </SelectFormArea>
      </ContentScreen>
    </FormPage>
  );
}
