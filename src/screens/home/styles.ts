import Styled from 'styled-components/native';
import {Button} from '../../components';
import {DefaultColors} from '../../design-tokens';

export const BackgroundScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-secondary'].main}
`;

export const HeaderRoot = Styled.View`
  background-color: ${DefaultColors['brand-primary'].main}
  width: 100%;
  height: 128px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const HeaderContent = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const FarmImage = Styled.Image`
  height: 40px;
  width: 40px;
`;

export const LeftElement = Styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const RightElement = Styled.View`
  height: 100%;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ProfileBackground = Styled.View`
  height: 56px;
  width: 56px;
  border-width: 2px;
  border-color: ${DefaultColors['brand-secondary'].main};
  border-radius: 36px;
  margin-horizontal: 16px;
  background: #FFFFFF;
  elevation: 4;
`;

export const ProfileName = Styled.Text`
  font-family: Barlow-Bold;
  font-size: 16px;
  color: ${DefaultColors['brand-primary'].contrast}
  width: 72px;
  text-align: right;
`;

export const IconFarmBox = Styled.View`
  width: 40px;
  flex-direction: row;
  align-items: center;
  margin-horizontal: 16px;
`;

export const IconFormBoxText = Styled.Text`
  font-family: OpenSans-Light;
  font-size: 14px;
  color: ${DefaultColors['brand-primary'].contrast}
  width: 72px;
  text-align: left;
`;

export const SelectCategoryContainer = Styled.View`
  padding-vertical: 8px;
  width: 100%;
`;

export const BtnSelect = Styled.TouchableOpacity`
  padding-vertical: 8px;
  margin-horizontal: 16px;
  width: 120px;
  background-color: #ECA864;
  height: auto;
  border-radius: 200px;
  margin-vertical: 8px;
  elevation: 8;
`;

export const BtnSelectText = Styled.Text`
  font-size: 14px;
  font-family: OpenSans-Regular;
  color: #542A00;
  text-align: center;
`;

export const ListBox = Styled.ScrollView`
  flex: 1;
  margin-vertical: 0px;
`;

export const ItemBox = Styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: #ECA864;
  height: 80px;
  border-radius: 0px;
  margin-vertical: 2px;
  padding-horizontal: 8px;
  opacity: 0.6;
`;

export const ColumnBoxRemove = Styled.View`
  height: 100%;
  width: 56px;
  
`;

export const ColumnBtnRemove = Styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TrashIconImage = Styled.Image`
  height: 24px;
  width: 24px;
`;

export const ColumnBox = Styled.View`
  height: 100%;
  width: 72px;
  justify-content: center;
`;

export const ColumnRight = Styled.View`
  height: 100%;
  width: 24px;
  justify-content: center;
  align-items: center;
`;

export const TitleColumn = Styled.Text`
  font-family: OpenSans-Light;
  font-size: 14px;
  color: #FFFFFF;
  margin-vertical: 4px;
`;

export const ValueColumn = Styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: #FFFFFF;
  margin-vertical: 4px;
`;

export const BottomBox = Styled.View`
  width: 100%;
  padding-horizontal: 24px;
  padding-vertical: 8px;
  position: absolute;
  bottom: 0;
`;
