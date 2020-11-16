import Styled from 'styled-components/native';
import {DefaultColors} from '../../styles-utils';

export const BackgroundScreen = Styled.View`
  flex: 1;
  background-color: ${DefaultColors['brand-secondary'].main}
`;

export const HeaderRoot = Styled.View`
  background-color: ${DefaultColors['brand-primary'].main}
  width: 100%;
  height: 160px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  elevation: 8;
`;

export const HeaderContent = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 16px;
`;

export const FarmImage = Styled.Image`
  height: 40px;
  width: 40px;
`;

export const HeaderLeftElement = Styled.View`
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderRightElement = Styled.View`
  height: 100%;
  flex-direction: row-reverse;
  align-items: flex-end;
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

export const FilterBackgroundBox = Styled.View`
  height: 64px;
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  padding-horizontal: 16px;
`;

export const SearchInputContent = Styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding-horizontal: 16px;
`;

export const SelectContainer = Styled.View`
  padding-vertical: 8px;
  flex-direction: row;
  width: 100%;
`;

export const BoxSelect = Styled.View`
  width: 50%;
`;

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

export const BtnSelectText = Styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: #542A00;
  text-align: center;
`;

export const BtnSelectIcon = Styled.Image`
  height: 18px;
  width: 26px;
`;

export const ArrowBtnIcon = Styled.View``;

export const ListBox = Styled.FlatList`
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

export const CloseDrawerButton = Styled.TouchableOpacity`
  height: 64px;
  width: 100%;
  align-items: flex-end;
  padding-horizontal: 16px;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const DrawerAreaProfilePhoto = Styled.View`
  width: 100%;
  align-items: flex-end;
  padding-horizontal: 0px;
  justify-content: center;
  margin-vertical: 24px;
`;

export const DrawerPropertyOptionBox = Styled.View`
  width: 100%;
  padding-horizontal: 16px;
  padding-vertical: 16px;
`;

export const DrawerPropertyOption = Styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  align-items: flex-end;
  padding-horizontal: 8px;
  justify-content: center;
`;

export const DrawerPropertyOptionText = Styled.Text`
  font-size: 16px;
  font-family: OpenSans-Medium;
  color: #FFFFFF;
  text-align: center;
`;

export const ResponseErrorText = Styled.Text`
  text-align: center;
  font-family: OpenSans-Medium;
  color: ${DefaultColors['action-error'].main}
`;
