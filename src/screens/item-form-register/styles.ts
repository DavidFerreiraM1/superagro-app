import Styled from 'styled-components/native';
import {DefaultColors} from '../../design-tokens';

export const ContentScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-secondary'].main};
`;

export const HeaderRoot = Styled.View`
  width: 100%;
  height: 124px;
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

export const TitleArea = Styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = Styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 88px;
  right: 24px
`;

export const TitleImage = Styled.Image`
  height: 42px;
  width: 45px;
`;

export const NewItemDescription = Styled.Text`
  margin-vertical: 4px;
  font-family: Ubuntu-Light;
  font-size: 18px;
  text-align: center;
  color: ${DefaultColors['action-primary'].main};
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
