/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React, {useContext, useEffect} from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { Keyboard } from 'react-native';
import {
  BtnSelectContent,
  SelectFormLabel,
  InputBox,
  BtnSelectCustomText,
  BtnSelectCustom as BtnSelect,
  BtnSelectCustomLeftBox,
  BtnSelectCustomTextTitle,
  BtnSelectCustomRightBox,
  ContentScreen,
} from './styles';
import ArrowIcon from '../../assets/icons/arrow.svg';
import {FormPage} from './form-page';
import {FormRegisterContext} from './form-context';
import { productionPhase } from './datas';

export function PhaseProductionFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const animalTypeValue = values.tipoAnimal;

  useEffect(() => {
    Keyboard.dismiss()
  }, []);
  
  return (
    <FormPage>
      <ContentScreen style={{ paddingBottom: 0 }}>
        <InputBox contentContainerStyle={{paddingBottom: 56}}>
          <SelectFormLabel>
            Informe a fase de produção que se encontra este animal
          </SelectFormLabel>

          {
            productionPhase[animalTypeValue].map((param: any, key: number) => {
              return (
              <BtnSelect key={key} onPress={() => {
                setFormValues('faseProducao', param.initials);
                props.navigation.navigate('farm-type')
              }}>
                <BtnSelectContent style={{height: 132}}>
                  <BtnSelectCustomLeftBox>
                    <BtnSelectCustomTextTitle>{param.initials}</BtnSelectCustomTextTitle>
                    <BtnSelectCustomText>{param.description}</BtnSelectCustomText>
                  </BtnSelectCustomLeftBox>
                  <BtnSelectCustomRightBox>
                    <ArrowIcon height={24} width={24} />
                  </BtnSelectCustomRightBox>
                </BtnSelectContent>
              </BtnSelect>
              )
            })
          }
        </InputBox>
      </ContentScreen>
    </FormPage>
  );
}
