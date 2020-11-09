import Styled from 'styled-components/native';

export const ArrowBtnIcon = Styled.View``;

export const BtnSelect = Styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  padding-vertical: 8px;
  padding-horizontal: 12px;
  margin-horizontal: 16px;
  background-color: #ECA864;
  height: auto;
  border-radius: 200px;
  margin-vertical: 8px;
  elevation: 8;
`;

export const BtnSelectIcon = Styled.Image`
  height: 16px;
  width: 24px;
`;

export const BtnSelectText = Styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: #542A00;
  text-align: center;
`;
