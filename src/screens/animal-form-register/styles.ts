import Styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {DefaultColors} from '../../styles-utils';
import {BtnSelect} from '../../components';

export const ContentScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-secondary'].main};
  padding-bottom: 80px;
`;

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

export const FormArea = Styled.View`
  height: 100%;
  justify-content: center;
`;

export const SelectFormArea = Styled.View`
  width: 240px;
  align-self: center;
  bottom: 24px;
`;

export const SelectFormLabel = Styled.Text`
  color: #542A00;
  font-family: Barlow-Regular;
  font-size: 20px;
  padding-horizontal: 12px;
  margin-vertical: 8px;
`;

export const InputBox = Styled.ScrollView`
  padding-horizontal: 0px;
  padding-top: 0px;
  height: 100%
  width: 100%;
`;

export const BtnSelectCustom = Styled(BtnSelect)`
  border-radius: 8px;
  padding-horizontal: 4px;
  elevation: 4;
`;

export const BtnSelectContent = Styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  
`;

export const BtnSelectCustomTextTitle = Styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  text-align: justify;
  margin-bottom: 4px;
`;

export const BtnSelectCustomText = Styled.Text`
  font-family: OpenSans-Regular;
  font-size: 14px;
  text-align: justify;
`;

export const BtnSelectCustomLeftBox = Styled.View`
  width: 85%;
  padding-horizontal: 12px;
`;

export const BtnSelectCustomRightBox = Styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FeedbackText = Styled.Text`
  margin-vertical: 24px;
  width: 100%;
  font-family: OpenSans-Regular;
  color: ${DefaultColors['action-primary'].main}
  font-size: 16px;
  text-align: center;
`;

export const ErrorMsgBox = Styled.View`
  width: 100%;
  margin-vertical: 32px;
  margin-left: 24px;
`;

export const ErrorMsgText = Styled.Text`
  font-size: 18px;
  color: ${DefaultColors['action-error'].main}
  font-family: OpenSans-Medium;
`;
