/* eslint-disable @typescript-eslint/no-empty-function */
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {
  BtnContentText,
  Button,
  ContainerScreen,
  Drawer,
} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {ButtonSelectCategory, ProfilePhoto} from '../../components/dashboard';
import {ButtonSelectFilterParam} from './button-select-filter-param';
import {Header} from './header';
import {ItemBox} from './item-box';
import {
  BackgroundScreen,
  BottomBox,
  ListBox,
  BoxSelect,
  SelectContainer,
  CloseDrawerButton,
  DrawerAreaProfilePhoto,
  DrawerPropertyOptionBox,
  DrawerPropertyOption,
  DrawerPropertyOptionText,
} from './styles';
import ArrowIcon from '../../assets/icons/arrow.svg';

export function Home(props: StackHeaderProps) {
  const drawerRef: any = useRef();
  const openDrawer = () => {
    drawerRef.current.open();
  };

  const registerNewItemNavigate = () => {
    props.navigation.navigate('item-form-register');
  };

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-primary'].main}
        barStyle="light-content"
      />
      <BackgroundScreen>
        <Header openDrawer={openDrawer} />
        <SelectContainer>
          <BoxSelect>
            <ButtonSelectCategory typeSelect="swine" onPress={() => {}} />
          </BoxSelect>
          <BoxSelect>
            <ButtonSelectFilterParam />
          </BoxSelect>
        </SelectContainer>
        <ListBox contentContainerStyle={{paddingBottom: 88}}>
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </ListBox>
        <BottomBox>
          <Button
            onPress={registerNewItemNavigate}
            variant="contained"
            color="action-primary">
            <BtnContentText color="action-primary">ADICIONAR</BtnContentText>
          </Button>
        </BottomBox>
      </BackgroundScreen>
      <>
        <Drawer ref={drawerRef}>
          <CloseDrawerButton onPress={() => drawerRef.current.close()}>
            <ArrowIcon height={24} width={24} />
          </CloseDrawerButton>
          <DrawerAreaProfilePhoto>
            <ProfilePhoto disabled />
          </DrawerAreaProfilePhoto>
          <DrawerPropertyOptionBox>
            <DrawerPropertyOption>
              <DrawerPropertyOptionText>Usuário</DrawerPropertyOptionText>
            </DrawerPropertyOption>
            <DrawerPropertyOption>
              <DrawerPropertyOptionText>Granja</DrawerPropertyOptionText>
            </DrawerPropertyOption>
          </DrawerPropertyOptionBox>
        </Drawer>
      </>
    </ContainerScreen>
  );
}
