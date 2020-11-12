import React, {forwardRef, ReactNode, useImperativeHandle} from 'react';
import {Animated} from 'react-native';
import {BackgroundScreen} from './styles';

interface Props {
  height: number;
  children: ReactNode;
}

function _BottomModal(props: Props, ref: any) {
  const value = new Animated.Value(props.height);

  const animation = (toValue: number) =>
    Animated.timing(value, {
      toValue,
      duration: 420,
      useNativeDriver: true,
    }).start();

  const open = () => animation(0);
  const close = () => animation(props.height);

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <BackgroundScreen>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          height: props.height,
          width: '100%',
          elevation: 9,
          transform: [{translateY: value}],
        }}>
        {props.children}
      </Animated.View>
    </BackgroundScreen>
  );
}

export const BottomModal = forwardRef(_BottomModal);
