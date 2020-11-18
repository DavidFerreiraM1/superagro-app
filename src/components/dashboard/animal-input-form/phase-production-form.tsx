/* eslint-disable react/no-array-index-key */
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
import {productionPhase} from './datas';

interface Props {
  onPressValue: (value: string) => void;
  animalType: string;
}

export function PhaseProductionForm(props: Props) {
  const animalTypeValue = props.animalType;
  return (
    <InputBox contentContainerStyle={{paddingBottom: 56}}>
      <SelectFormLabel>
        Informe a fase de produção que se encontra este animal
      </SelectFormLabel>

      {productionPhase[animalTypeValue].map((param: any, key: number) => {
        return (
          <BtnSelect
            key={key}
            onPress={() => {
              console.log('valor de fase', param.initials);
              props.onPressValue(param.initials);
            }}>
            <BtnSelectContent style={{height: 132}}>
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
