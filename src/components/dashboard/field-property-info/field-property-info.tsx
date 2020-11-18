import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import ArrowBack from '../../../assets/icons/arrow.svg';
import {
  FieldPropertyInfoRoot,
  FieldPropertyNameText,
  FieldPropertyRightBox,
  FieldPropertyValueText,
} from './styles';

interface Props extends TouchableOpacityProps {
  propertyName: string;
  propertyValue: string;
}

export function FieldPropertyInfo(props: Props) {
  const {propertyName, propertyValue, ...otherProps} = props;
  return (
    <FieldPropertyInfoRoot {...otherProps}>
      <FieldPropertyNameText>{propertyName}</FieldPropertyNameText>
      <FieldPropertyRightBox>
        <FieldPropertyValueText numberOfLines={2}>
          {propertyValue}
        </FieldPropertyValueText>
        <ArrowBack height={20} width={14} />
      </FieldPropertyRightBox>
    </FieldPropertyInfoRoot>
  );
}
