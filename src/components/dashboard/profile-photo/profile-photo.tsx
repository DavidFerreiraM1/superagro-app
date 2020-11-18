import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ProfileBackground} from './styles';

type Props = TouchableOpacityProps;

export function ProfilePhoto(props: Props) {
  return <ProfileBackground {...props} />;
}
