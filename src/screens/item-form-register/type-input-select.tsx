/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {View} from 'react-native';
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
import ArrowIcon from '../../assets/icons/arrow.svg';

interface datatype {
  initials: string;
  description: string;
}

interface OwnProps {
  labelText: string;
  formKey: string;
  formKeyActive: string;
  data: datatype[];
  onPressValue: (value: string) => void;
}

type Props = OwnProps;

export function TypeInputselect(props: Props) {
  const Component = () => {
    return (
      <>
        <InputBox contentContainerStyle={{paddingBottom: 56}}>
          <SelectFormLabel>{props.labelText}</SelectFormLabel>
          {props.data.map((data, key) => {
            return (
              <BtnSelect
                key={key}
                onPress={() => {
                  props.onPressValue(data.initials);
                }}>
                <BtnSelectContent>
                  <BtnSelectCustomLeftBox>
                    <BtnSelectCustomTextTitle>
                      {data.initials}
                    </BtnSelectCustomTextTitle>
                    <BtnSelectCustomText>
                      {data.description}
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
      </>
    );
  };
  return (
    <View>{props.formKey === props.formKeyActive ? <Component /> : null}</View>
  );
}
