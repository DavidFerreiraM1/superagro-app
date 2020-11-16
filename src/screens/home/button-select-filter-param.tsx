import React from 'react';
import {ArrowBtnIcon} from './styles';
import {BtnSelectText, BtnSelect} from '../../components';
import ArrowIcon from '../../assets/icons/arrow.svg';

interface Props {
  disabled: boolean | undefined;
  onPress(): void;
  text: string;
}

export function ButtonSelectFilterParam(props: Props) {
  return (
    <BtnSelect onPress={props.onPress} disabled={props.disabled}>
      <BtnSelectText>{props.text}</BtnSelectText>
      <ArrowBtnIcon>
        <ArrowIcon height={14} width={14} />
      </ArrowBtnIcon>
    </BtnSelect>
  );
}
