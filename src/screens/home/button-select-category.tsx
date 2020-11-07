import React from 'react';
import {ArrowBtnIcon, BtnSelect, BtnSelectIcon, BtnSelectText} from './styles';
import PigImage from '../../assets/images/pig.png';
import ArrowIcon from '../../assets/icons/arrow.svg';

export function ButtonSelectCategory() {
  return (
    <BtnSelect>
      <BtnSelectIcon source={PigImage} />
      <BtnSelectText>suínos</BtnSelectText>
      <ArrowBtnIcon>
        <ArrowIcon height={14} width={14} />
      </ArrowBtnIcon>
    </BtnSelect>
  );
}
