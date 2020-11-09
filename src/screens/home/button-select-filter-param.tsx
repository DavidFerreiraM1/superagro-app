import React from 'react';
import {ArrowBtnIcon} from './styles';
import {BtnSelectText, BtnSelect} from '../../components';
import ArrowIcon from '../../assets/icons/arrow.svg';

export function ButtonSelectFilterParam() {
  return (
    <BtnSelect>
      <BtnSelectText>Localização</BtnSelectText>
      <ArrowBtnIcon>
        <ArrowIcon height={14} width={14} />
      </ArrowBtnIcon>
    </BtnSelect>
  );
}
