import Styled from 'styled-components/native';
import {DefaultColors} from '../../../design-tokens';

export const HeaderRoot = Styled.View`
  width: 100%;
  height: 72px;
  background-color: ${DefaultColors['brand-secondary'].main};
`;

export const HeaderContent = Styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButtonArea = Styled.View`
  width: 48px
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackButton = Styled.TouchableOpacity`
  width: 100%
  height: 64px;
  justify-content: center;
  align-items: center;
`;
