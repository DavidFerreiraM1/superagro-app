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

  const updateInfoNavigate = (
    label: string,
    animalKey: string,
    animalValue: string,
  ) => {
    props.navigation.navigate('update-value-text-page', {
      label,
      animalKey,
      animalType: data.tipoAnimal,
      animalValue,
    });
  };

  const updateSelectNavigate = (
    url: string,
    label: string,
    animalKey: string,
    animalValue: string,
  ) => {
    props.navigation.navigate(url, {
      label,
      animalKey,
      animalType: data.tipoAnimal,
      animalValue,
    });
  };

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
          onPress={() =>
            updateSelectNavigate(
              'animal-category-update-page',
              '',
              'tipoAnimal',
              data.tipoAnimal,
            )
          }
          propertyName="Tipo de animal"
          propertyValue={headerIconImage[data.tipoAnimal].text}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate('Alterar nome do animal', 'nome', data.nome)
          }
          propertyName="Nome"
          propertyValue={data.nome}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate(
              'Alterar localização do animal',
              'localizacao',
              data.localizacao,
            )
          }
          propertyName="Localização"
          propertyValue={data.localizacao}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate(
              'Alterar data de nascimento',
              'dataNascimento',
              data.dataNascimento,
            )
          }
          propertyName="Data de nascimento"
          propertyValue={data.dataNascimento}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate(
              'Alterar entrada no plantel',
              'entradaPlantel',
              data.entradaPlantel,
            )
          }
          propertyName="Entrada no plantel"
          propertyValue={data.entradaPlantel}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate(
              'Alterar Peso do item',
              'pesoCompra',
              data.pesoCompra,
            )
          }
          propertyName="Peso na compra"
          propertyValue={data.pesoCompra}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate('Alterar raça do animal', 'raca', data.raca)
          }
          propertyName="Raça"
          propertyValue={data.raca}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateInfoNavigate(
              'Alterar Código de rastreamento',
              'codigoRastreamento',
              data.codigoRastreamento,
            )
          }
          propertyName="Código de rastreamento"
          propertyValue={data.codigoRastreamento}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateSelectNavigate(
              'production-phase-update-page',
              '',
              'faseProducao',
              data.faseProducao,
            )
          }
          propertyName="Fase de produção"
          propertyValue={data.faseProducao}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateSelectNavigate(
              'farm-type-update-page',
              '',
              'tipoGranja',
              data.tipoGranja,
            )
          }
          propertyName="Tipo de granja"
          propertyValue={data.tipoGranja}
        />
        <FieldPropertyInfo
          onPress={() =>
            updateSelectNavigate(
              'animal-status-update-page',
              '',
              'statusAnimal',
              data.statusAnimal,
            )
          }
          propertyName="Status"
          propertyValue={data.statusAnimal}
        />
      </ContentScreen>
    </ContainerScreen>
  );
}
