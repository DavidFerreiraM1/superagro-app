import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const HeaderRoot = Styled.View`
  background-color: ${DefaultColors['brand-primary'].main}
  width: 100%;
  height: 160px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  overflow: hidden;
`;

export const HeaderContent = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftElement = Styled.View`
  width: 40%;
  height: 100%;
`;

export const RightElement = Styled.View`
  width: 60%;
  height: 100%;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ProfileBackground = Styled.View`
  height: 72px;
  width: 72px;
  border-radius: 36px;
  margin-horizontal: 16px;
  background-color: #FFFFFF;
  elevation: 24
`;

export const ProfileNameBox = Styled.View``;
