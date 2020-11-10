import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const ContentScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-primary'].main}
  justify-content: center;
`;

export const FieldBox = Styled.View`
  bottom: 72px;
`;

export const FarmIconBox = Styled.View`
  height: 100%;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const FarmIconIMage = Styled.Image`
  height: 40px;
  width: 40px;
`;
