import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {Header} from './header';

export function Home() {
  return (
    <ContainerScreen>
      <StatusBar
        barStyle="light-content"
        backgroundColor={DefaultColors['brand-primary'].main}
      />
      <Header />
      <View>
        <Text>Home</Text>
      </View>
    </ContainerScreen>
  );
}
