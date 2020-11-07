import Styled from 'styled-components/native';
import {TextInput as RnTextInput} from 'react-native';
import {DefaultColors} from '../../design-tokens';
import {StyleProps} from './types';

const setBorderColor = ({color, variant}: StyleProps): string => {
  const result = {
    text: 'transparent',
    contained: color ? DefaultColors[color].main : '#FFFFFF',
  };
  return variant ? result[variant] : '#FFFFFF';
};

const setColor = ({color}: StyleProps): string => {
  return color ? DefaultColors[color].main : '#FFFFFF';
};

export const Root = Styled.View`
  height: auto;
  width: 100%;
  margin-vertical: 8px;
  border-radius: 200px;
`;

export const Background = Styled.View`
  height: 40px;
  width: 100%;
  border-width: 2px;
  border-color: ${setBorderColor};
  border-radius: 200px;
  overflow: hidden;
`;

export const TextInput = Styled(RnTextInput)`
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  color: ${setColor}
`;
