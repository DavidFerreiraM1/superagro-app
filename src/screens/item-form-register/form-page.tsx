import React from 'react';
import {StatusBar} from 'react-native';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {Header} from './header';

export function FormPage(props: any) {
  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-secondary'].main}
        barStyle="light-content"
      />
      <Header />
      {props.children}
    </ContainerScreen>
  );
}
