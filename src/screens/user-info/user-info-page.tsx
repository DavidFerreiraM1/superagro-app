import React from 'react';
import {StatusBar} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {ContainerScreen} from '../../components';
import {
  BackButton,
  BackButtonArea,
  FieldPropertyInfo,
  HeaderContent,
  HeaderRoot,
  ProfilePhoto,
} from '../../components/dashboard';
import ArrowBack from '../../assets/icons/arrow.svg';
import {DefaultColors} from '../../design-tokens';
import {ContentScreen, FieldBox} from './styles';

const defaultColor = DefaultColors['brand-primary'].main;
export function UserInfoPage(props: StackHeaderProps) {
  return (
    <ContainerScreen>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <HeaderRoot style={{backgroundColor: defaultColor}}>
        <HeaderContent>
          <BackButtonArea>
            <BackButton
              onPress={() => props.navigation.navigate('home')}
              style={{transform: [{rotate: '180deg'}]}}>
              <ArrowBack height={24} width={24} />
            </BackButton>
          </BackButtonArea>
          <ProfilePhoto />
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <FieldBox>
          <FieldPropertyInfo
            propertyName="Nome"
            propertyValue="David Ferreira Muniz"
          />
          <FieldPropertyInfo
            propertyName="Email"
            propertyValue="davidferreira.m1@outlook.com"
          />
          <FieldPropertyInfo
            propertyName="Senha cadastrada"
            propertyValue="****"
          />
        </FieldBox>
      </ContentScreen>
    </ContainerScreen>
  );
}
