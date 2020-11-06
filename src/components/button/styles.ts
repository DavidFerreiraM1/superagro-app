import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';
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

export const Root = Styled.TouchableOpacity`
  width: 100%;
  background-color: brown;
  height: auto;
  border-radius: 200px;
  margin-vertical: 8px;
  elevation: 8;
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