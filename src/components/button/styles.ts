import Styled from 'styled-components/native';
import {DefaultColors} from '../../styles-utils';
import {BtnContentTextProps, StyleProps} from './types';

const setBgColor = ({color, variant}: StyleProps): string => {
  const result = {
    text: 'transparent',
    contained: color ? DefaultColors[color].main : '#FFFFFF',
  };
  return result[variant];
};

const setColor = ({color}: BtnContentTextProps): string => {
  return color ? DefaultColors[color].contrast : '#000000';
};

const setElevation = ({variant}: StyleProps): number => {
  const result = {
    text: 0,
    contained: 8,
  };
  return result[variant];
};

export const Root = Styled.TouchableOpacity`
  width: 100%;
  background-color: ${setBgColor};
  height: auto;
  border-radius: 200px;
  margin-vertical: 8px;
  elevation: ${setElevation};
`;

export const Background = Styled.View`
  background-color: ${setBgColor};
  justify-content: center;
  align-items: center;
  padding-vertical: 16px;
  border-radius: 200px;
`;

export const ContentText = Styled.Text`
  font-size: 16px;
  font-family: Barlow-Regular;
  color: ${setColor}
`;

export const BtnSelect = Styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  padding-vertical: 8px;
  padding-horizontal: 12px;
  margin-horizontal: 16px;
  background-color: #ECA864;
  height: auto;
  border-radius: 200px;
  margin-vertical: 8px;
  elevation: 8;
`;

export const BtnSelectText = Styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: #542A00;
  text-align: center;
`;
