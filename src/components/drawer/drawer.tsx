import React, {forwardRef, useImperativeHandle} from 'react';
import {Animated, Dimensions, StatusBar} from 'react-native';
import {DefaultColors} from '../../design-tokens';
import {DrawerRoot} from './styles';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export function _Drawer(props: any, ref: any) {
  const value = new Animated.Value(WIDTH_SCREEN);

  const animation = (toValue: number) =>
    Animated.timing(value, {
      toValue,
      duration: 420,
      useNativeDriver: true,
    }).start();

  const open = () => {
    animation(WIDTH_SCREEN - 240);
  };
  const close = () => {
    animation(WIDTH_SCREEN);
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <Animated.View
      style={{
        position: 'absolute',
        zIndex: 100,
        height: '100%',
        width: 240,
        transform: [{translateX: value}],
      }}>
      <StatusBar backgroundColor={DefaultColors['brand-primary'].main} />
      <DrawerRoot>{props.children}</DrawerRoot>
    </Animated.View>
  );
}

export const Drawer = forwardRef(_Drawer);
