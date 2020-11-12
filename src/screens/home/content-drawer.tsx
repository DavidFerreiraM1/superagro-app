import React from 'react';
import {
  CloseDrawerButton,
  DrawerAreaProfilePhoto,
  DrawerPropertyOption,
  DrawerPropertyOptionBox,
  DrawerPropertyOptionText,
} from './styles';
import ArrowIcon from '../../assets/icons/arrow.svg';
import {ProfilePhoto} from '../../components/dashboard';

interface Props {
  onPressUserInfoNavigate(): void;
  onPressFarmInfoNavigate(): void;
  onPressDrawerClose(): void;
}

export function ContentDrawer(props: Props) {
  return (
    <>
      <CloseDrawerButton onPress={() => props.onPressDrawerClose()}>
        <ArrowIcon height={24} width={24} />
      </CloseDrawerButton>
      <DrawerAreaProfilePhoto>
        <ProfilePhoto disabled />
      </DrawerAreaProfilePhoto>
      <DrawerPropertyOptionBox>
        <DrawerPropertyOption>
          <DrawerPropertyOptionText
            onPress={() => {
              props.onPressUserInfoNavigate();
            }}>
            Usuário
          </DrawerPropertyOptionText>
        </DrawerPropertyOption>
        <DrawerPropertyOption
          onPress={() => {
            props.onPressFarmInfoNavigate();
          }}>
          <DrawerPropertyOptionText>Granja</DrawerPropertyOptionText>
        </DrawerPropertyOption>
      </DrawerPropertyOptionBox>
    </>
  );
}
