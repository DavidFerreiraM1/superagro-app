import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {BtnContentText, Button, ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {ButtonSelectCategory} from '../../components/dashboard';
import {ButtonSelectFilterParam} from './button-select-filter-param';
import {Header} from './header';
import {ItemBox} from './item-box';
import {
  BackgroundScreen,
  BottomBox,
  ListBox,
  BoxSelect,
  SelectContainer,
} from './styles';

export function Home(props: StackHeaderProps) {
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
        <Header />
        <SelectContainer>
          <BoxSelect>
            <ButtonSelectCategory typeSelect="swine" />
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
    </ContainerScreen>
  );
}
