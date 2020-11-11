import {StackHeaderProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ContainerScreen} from '../../components';
import {
  BackButton,
  BackButtonArea,
  FieldPropertyInfo,
  HeaderContent,
  HeaderRoot,
} from '../../components/dashboard';
import {ContentScreen, FarmIconBox, FarmIconIMage} from './styles';
import PoultryImage from '../../assets/images/poultry.png';
import ArrowBack from '../../assets/icons/arrow.svg';
import {DefaultColors} from '../../design-tokens';

const defaultColor = DefaultColors['brand-primary'].main;

export function AnimalInfoPage(props: StackHeaderProps) {
  useEffect(() => {
    console.log(props?.route);
  }, []);

  return (
    <ContainerScreen>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <HeaderRoot style={{backgroundColor: defaultColor, elevation: 8}}>
        <HeaderContent>
          <BackButtonArea>
            <BackButton
              onPress={() => props.navigation.navigate('home')}
              style={{transform: [{rotate: '180deg'}]}}>
              <ArrowBack height={24} width={24} />
            </BackButton>
          </BackButtonArea>
          <FarmIconBox>
            <FarmIconIMage source={PoultryImage} />
          </FarmIconBox>
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <FieldPropertyInfo
          propertyName="Tipo de animal"
          propertyValue="Suíno"
        />
        <FieldPropertyInfo propertyName="Nome" propertyValue="Pepa Pig" />
        <FieldPropertyInfo propertyName="Localização" propertyValue="Sala 1" />
        <FieldPropertyInfo
          propertyName="Data de nascimento"
          propertyValue="20/06/2020"
        />
        <FieldPropertyInfo
          propertyName="Entrada no plantel"
          propertyValue="20/06/2020"
        />
        <FieldPropertyInfo propertyName="Peso na compra" propertyValue="64" />
        <FieldPropertyInfo propertyName="Raça" propertyValue="Porco Rosa" />
        <FieldPropertyInfo
          propertyName="Código de rastreamento"
          propertyValue="2s9s1a5q56556521d5a"
        />
        <FieldPropertyInfo
          propertyName="Fase de produção"
          propertyValue="CRE"
        />
        <FieldPropertyInfo
          propertyName="Tipo de granja"
          propertyValue="Recria"
        />
        <FieldPropertyInfo propertyName="Status" propertyValue="Vendido" />
      </ContentScreen>
    </ContainerScreen>
  );
}
