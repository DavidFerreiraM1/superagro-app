import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const ContentScreen = Styled.ScrollView`
  padding-top: 8px;
  background-color: ${DefaultColors['brand-primary'].main};
`;

export const FieldBox = Styled.View``;

export const FarmIconBox = Styled.View`
  height: 100%;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const FarmIconIMage = Styled.Image`
  height: 38px;
  width: 40px;
`;
