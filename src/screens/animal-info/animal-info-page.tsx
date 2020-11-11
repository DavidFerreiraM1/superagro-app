import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
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
import ArrowBack from '../../assets/icons/arrow.svg';
import {DefaultColors} from '../../design-tokens';
import {getAnimalOnRealm} from './animal-info-service';

import PigImage from '../../assets/images/pig.png';
import PoultryImage from '../../assets/images/poultry.png';

const defaultColor = DefaultColors['brand-primary'].main;
const headerIconImage: any = {
  swine: {
    text: 'Suíno',
    url: PigImage,
    style: {height: 29, width: 43},
  },
  poultry: {
    text: 'Aves',
    url: PoultryImage,
    style: {height: 42, width: 45},
  },
};

export function AnimalInfoPage(props: StackScreenProps<any>) {
  const [data, setData] = useState({
    tipoAnimal: 'swine',
    nome: '',
    localizacao: '',
    dataNascimento: '',
    entradaPlantel: '',
    pesoCompra: '',
    raca: '',
    codigoRastreamento: '',
    faseProducao: '',
    tipoGranja: '',
    statusAnimal: '',
  });

  useEffect(() => {
    const getDataOnRealm = async () => {
      setData(await getAnimalOnRealm(props.route.params?.animalId));
    };
    getDataOnRealm();
  }, []);

  useEffect(() => {
    console.log('Data Alterou', data);
  }, [data]);

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
            <FarmIconIMage
              style={headerIconImage[data.tipoAnimal].style}
              source={headerIconImage[data.tipoAnimal].url}
            />
          </FarmIconBox>
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <FieldPropertyInfo
          propertyName="Tipo de animal"
          propertyValue={headerIconImage[data.tipoAnimal].text}
        />
        <FieldPropertyInfo propertyName="Nome" propertyValue={data.nome} />
        <FieldPropertyInfo propertyName="Localização" propertyValue="Sala 1" />
        <FieldPropertyInfo
          propertyName="Data de nascimento"
          propertyValue={data.dataNascimento}
        />
        <FieldPropertyInfo
          propertyName="Entrada no plantel"
          propertyValue={data.entradaPlantel}
        />
        <FieldPropertyInfo
          propertyName="Peso na compra"
          propertyValue={data.pesoCompra}
        />
        <FieldPropertyInfo propertyName="Raça" propertyValue="Porco Rosa" />
        <FieldPropertyInfo
          propertyName="Código de rastreamento"
          propertyValue={data.codigoRastreamento}
        />
        <FieldPropertyInfo
          propertyName="Fase de produção"
          propertyValue="CRE"
        />
        <FieldPropertyInfo
          propertyName="Tipo de granja"
          propertyValue={data.tipoGranja}
        />
        <FieldPropertyInfo propertyName="Status" propertyValue="Vendido" />
      </ContentScreen>
    </ContainerScreen>
  );
}
