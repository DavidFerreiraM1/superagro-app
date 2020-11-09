import React from 'react';
import {ActivityIndicator} from 'react-native';
import {DefaultColors} from '../../design-tokens';
import {ContentScreen} from './styles';

export function RegisterFinalStaging() {
  return (
    <ContentScreen
      style={{
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <ActivityIndicator
        size="large"
        color={DefaultColors['brand-primary'].main}
        style={{height: '100%', width: '100%'}}
      />
    </ContentScreen>
  );
}
