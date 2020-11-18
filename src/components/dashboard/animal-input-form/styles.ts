import {TextInput} from 'react-native';
import Styled from 'styled-components/native';
import {BtnSelect} from '../..';

export const InputLabel = Styled.Text`
  color: #542A00;
  font-family: Barlow-SemiBold;
  font-size: 20px;
  padding-horizontal: 12px;
  padding-vertical: 16px;
`;

export const TextInputCustom = Styled(TextInput)`
  color: #FFFFFF;
  font-size: 18px;
  padding-left: 24px;
`;

export const InputBox = Styled.ScrollView`
  padding-horizontal: 0px;
  padding-top: 0px;
  height: 100%
  width: 100%;
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
