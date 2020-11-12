import Styled from 'styled-components/native';
import {DefaultColors} from '../../styles-utils';

export const ContentScreen = Styled.ScrollView`
  background-color: ${DefaultColors['brand-secondary'].main};
`;

export const ContentScreenSencondary = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-secondary'].main};
  justify-content: center;
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

export const TitleArea = Styled.View`
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TitleBox = Styled.View`
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 88px;
  right: 24px
`;

export const TitleImage = Styled.Image`
  height: 42px;
  width: 45px;
`;

export const BottomControlContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonSideBox = Styled.View`
  width: 50%;
  align-items: center;
  padding-horizontal: 8px;
`;
