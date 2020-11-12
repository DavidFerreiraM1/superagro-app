import React from 'react';
import {StatusBar} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {
  BackButton,
  BackButtonArea,
  FieldPropertyInfo,
  HeaderContent,
  HeaderRoot,
} from '../../components/dashboard';
import ArrowBack from '../../assets/icons/arrow.svg';
import {ContainerScreen} from '../../components';
import {ContentScreen, FarmIconBox, FarmIconIMage, FieldBox} from './styles';
import {DefaultColors} from '../../styles-utils';
import FarmImage from '../../assets/images/farm-white.png';

const defaultColor = DefaultColors['brand-primary'].main;

export function FarmInfoPage(props: StackHeaderProps) {
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
          <FarmIconBox>
            <FarmIconIMage source={FarmImage} />
          </FarmIconBox>
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <FieldBox>
          <FieldPropertyInfo
            propertyName="Nome da granja"
            propertyValue="Granja Comary"
          />
          <FieldPropertyInfo
            propertyName="Cidade"
            propertyValue="Rio de Janeiro"
          />
          <FieldPropertyInfo
            propertyName="Estado"
            propertyValue="Rio de Janeiro"
          />
        </FieldBox>
      </ContentScreen>
    </ContainerScreen>
  );
}
