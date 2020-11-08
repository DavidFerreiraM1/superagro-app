import React from 'react';
import {ArrowBtnIcon, BtnSelectIcon} from './styles';
import {BtnSelect, BtnSelectText} from '../..';
import PigImage from '../../../assets/images/pig.png';
import PoultryImage from '../../../assets/images/poultry.png';
import ArrowIcon from '../../../assets/icons/arrow.svg';

const values = {
  swine: {
    image: PigImage,
    text: 'Suínos',
    style: {
      height: 24,
      width: 35,
    },
  },
  poultry: {
    image: PoultryImage,
    text: 'Aves',
    style: {
      height: 25,
      width: 34,
    },
  },
};

interface Props {
  typeSelect: 'swine' | 'poultry';
}

export function ButtonSelectCategory(props: Props) {
  return (
    <BtnSelect>
      <BtnSelectIcon
        style={values[props.typeSelect].style}
        source={values[props.typeSelect].image}
      />
      <BtnSelectText>{values[props.typeSelect].text}</BtnSelectText>
      <ArrowBtnIcon>
        <ArrowIcon height={14} width={14} />
      </ArrowBtnIcon>
    </BtnSelect>
  );
}
