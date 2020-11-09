/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React, {useContext} from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
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
import {farmType} from './datas';
import {FormRegisterContext} from './form-context';

export function FarmTypeFormPage(props: StackHeaderProps) {
  const {values, setFormValues} = useContext(FormRegisterContext);
  const animalTypeValue = values.tipoAnimal;
  return (
    <FormPage>
      <ContentScreen style={{paddingBottom: 0}}>
        <InputBox contentContainerStyle={{paddingBottom: 56}}>
          <SelectFormLabel>Informe o tipo de granja</SelectFormLabel>

          {farmType[animalTypeValue].map((param: any, key: number) => {
            return (
              <BtnSelect
                key={key}
                onPress={() => {
                  setFormValues('tipoGranja', param.initials);
                  props.navigation.navigate('animal-status');
                }}>
                <BtnSelectContent style={{height: 80}}>
                  <BtnSelectCustomLeftBox>
                    <BtnSelectCustomTextTitle>
                      {param.initials}
                    </BtnSelectCustomTextTitle>
                    <BtnSelectCustomText>
                      {param.description}
                    </BtnSelectCustomText>
                  </BtnSelectCustomLeftBox>
                  <BtnSelectCustomRightBox>
                    <ArrowIcon height={24} width={24} />
                  </BtnSelectCustomRightBox>
                </BtnSelectContent>
              </BtnSelect>
            );
          })}
        </InputBox>
      </ContentScreen>
    </FormPage>
  );
}
