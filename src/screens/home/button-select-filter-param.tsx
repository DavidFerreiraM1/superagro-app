import React from 'react';
import {ArrowBtnIcon} from './styles';
import {BtnSelectText, BtnSelect} from '../../components';
import ArrowIcon from '../../assets/icons/arrow.svg';

interface Props {
  disabled: boolean | undefined;
}

export function ButtonSelectFilterParam(props: Props) {
  return (
    <BtnSelect disabled={props.disabled}>
      <BtnSelectText>Localização</BtnSelectText>
      <ArrowBtnIcon>
        <ArrowIcon height={14} width={14} />
      </ArrowBtnIcon>
    </BtnSelect>
  );
}
