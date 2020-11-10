import {TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {DefaultColors} from '../../../design-tokens';

export const FieldPropertyInfoRoot = Styled(TouchableOpacity)`
  width: 100%;
  height: 72px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  margin-vertical: 2px;
  border-width: 1px;
  border-color: ${DefaultColors['brand-secondary'].main};
  background-color: ${DefaultColors['brand-secondary'].main};
`;

export const FieldPropertyNameText = Styled.Text`
  font-family: OpenSans-Regular;
  fontSize: 16px;
  color: ${DefaultColors['brand-primary'].contrast};
`;

export const FieldPropertyRightBox = Styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const FieldPropertyValueText = Styled.Text`
  font-family: Barlow-Bold;
  fontSize: 16px;
  color: ${DefaultColors['brand-primary'].main}
  margin-right: 16px;
`;
