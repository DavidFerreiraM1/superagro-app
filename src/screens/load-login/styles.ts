import {TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {DefaultColors} from '../../styles-utils';

export const ContentScreen = Styled.View`
  height: 100%;
  width: 100%;
  background-color: ${DefaultColors['brand-secondary'].main};
`;

export const ImageAppBox = Styled.View`
  height: 100%;
  width: 100%
  justify-content: center;
  align-items: center
`;

export const ImageApp = Styled.Image`
  height: 160px;
  width: 105px;
`;

export const BottomComponents = Styled.View`
  padding-horizontal: 8px;
  padding-vertical: 8px; 
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;

export const ModalContent = Styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px; 
`;

export const InputBox = Styled.View`
  flex: 1;
  bottom: 16px;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const ModalHeader = Styled.View`
  width: 100%;
  height: 72px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonCloseBox = Styled.View`
  height: 48px;
  width: 48px;
`;

export const ButtonCloseSide = Styled.View`
  height: 48px;
  padding-horizontal: 8px;
`;

export const TextSide = Styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = Styled.Text`
  font-size: 18px;
  font-family: OpenSans-Regular;
  color: ${DefaultColors['brand-secondary'].main}
  left: 32px;
`;

export const ButtonClose = Styled(TouchableOpacity)`
  width: 48px;
  height: 48px;
  background-color: brown;
  border-radius: 30px;
`;

export const ErrorMsgBox = Styled.View`
  height: 0;
  width: 100%;
  bottom: 8px
`;

export const ErrorMsgText = Styled.Text`
  font-size: 18px;
  color: ${DefaultColors['action-error'].main}
  font-family: OpenSans-Medium;
  text-align: center;
`;
