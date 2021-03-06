import React from 'react';
import {ArrowBtnIcon, BtnSelectIcon} from './styles';
import {BtnSelect, BtnSelectText} from '../..';
import PigImage from '../../../assets/images/pig.png';
import PoultryImage from '../../../assets/images/poultry.png';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import FarmImg from '../../../assets/images/farm.png';

const values: any = {
  all: {
    image: FarmImg,
    text: 'Ambos',
    style: {
      height: 32.5,
      width: 32,
    },
  },
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
  typeSelect: string;
  onPress: () => any;
  disabled: boolean | undefined;
}

export function ButtonSelectCategory(props: Props) {
  return (
    <BtnSelect disabled={props.disabled} onPress={props.onPress}>
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
