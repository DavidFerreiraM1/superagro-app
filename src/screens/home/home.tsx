import React from 'react';
import {StatusBar} from 'react-native';
import {BtnContentText, Button, ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {ButtonSelectCategory} from './button-select-category';
import {Header} from './header';
import {ItemBox} from './item-box';
import {
  BackgroundScreen,
  BottomBox,
  ListBox,
  SelectCategoryContainer,
} from './styles';

export function Home() {
  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-primary'].main}
        barStyle="light-content"
      />
      <BackgroundScreen>
        <Header />
        <SelectCategoryContainer>
          <ButtonSelectCategory />
        </SelectCategoryContainer>
        <ListBox contentContainerStyle={{paddingBottom: 88}}>
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </ListBox>
        <BottomBox>
          <Button variant="contained" color="action-primary">
            <BtnContentText color="action-primary">ADICIONAR</BtnContentText>
          </Button>
        </BottomBox>
      </BackgroundScreen>
    </ContainerScreen>
  );
}
