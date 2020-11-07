import React from 'react';
import {StatusBar} from 'react-native';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {BottomControl} from './bottom-control';
import {Header} from './header';
import {ContentScreen} from './styles';

export function ItemFormRegister() {
  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-secondary'].main}
        barStyle="light-content"
      />
      <Header />
      <ContentScreen />
      <BottomControl />
    </ContainerScreen>
  );
}
