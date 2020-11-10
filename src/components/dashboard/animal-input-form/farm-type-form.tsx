/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  BtnSelectContent,
  SelectFormLabel,
  InputBox,
  BtnSelectCustomText,
  BtnSelectCustom as BtnSelect,
  BtnSelectCustomLeftBox,
  BtnSelectCustomTextTitle,
  BtnSelectCustomRightBox,
} from './styles';
import ArrowIcon from '../../../assets/icons/arrow.svg';

import {farmType} from './datas';

interface Props {
  onPressValue: (value: string) => void;
  animalType: string;
}

export function FarmTypeForm(props: Props) {
  const animalTypeValue: any = props.animalType;

  return (
    <InputBox contentContainerStyle={{paddingBottom: 56}}>
      <SelectFormLabel>Informe o tipo de granja</SelectFormLabel>
      {farmType[animalTypeValue].map((param: any, key: number) => {
        return (
          <BtnSelect
            key={key}
            onPress={() => {
              props.onPressValue(param.initials);
            }}>
            <BtnSelectContent style={{height: 80}}>
              <BtnSelectCustomLeftBox>
                <BtnSelectCustomTextTitle>
                  {param.initials}
                </BtnSelectCustomTextTitle>
                <BtnSelectCustomText>{param.description}</BtnSelectCustomText>
              </BtnSelectCustomLeftBox>
              <BtnSelectCustomRightBox>
                <ArrowIcon height={24} width={24} />
              </BtnSelectCustomRightBox>
            </BtnSelectContent>
          </BtnSelect>
        );
      })}
    </InputBox>
  );
}
