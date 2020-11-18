/* eslint-disable no-alert */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ContainerScreen} from '../../components';
import {
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
  PhaseProductionForm,
} from '../../components/dashboard';
import {ContentScreen, TitleArea, TitleBox, TitleImage} from './styles';

import ArrowBack from '../../assets/icons/arrow.svg';
import PigImage from '../../assets/images/pig.png';
import PoultryImage from '../../assets/images/poultry.png';
import {DefaultColors} from '../../styles-utils';
import * as animalActions from '../../redux/ducks/animal/action';
import {updateAnimal} from '../../services/animal-service';
import {dateFormat} from '../../core/format-data-save';
import {IAnimal} from '../../core/interfaces';
import {RealConnection} from '../../realm/realm-connection';

const topImages: any = {
  '': {
    url: PigImage,
    text: 'Suínos',
    style: {height: 29, width: 43},
  },
  swine: {
    url: PigImage,
    text: 'Suínos',
    style: {height: 29, width: 43},
  },
  poultry: {
    url: PoultryImage,
    text: 'Aves',
    style: {height: 42, width: 45},
  },
};

interface ActionsProps {
  changeAnimalValue(param: any): any;
}

type Props = StackScreenProps<any> & ActionsProps;

function _ProductionPhaseUpdatePage(props: Props) {
  const updateSubmit = async (value: string) => {
    const realm = await RealConnection();
    let animal: any = realm
      .objects('AnimalItem')
      .filtered('id == $0', props.route.params?.animalId)[0];

    const getValuesUpdate = (): IAnimal => {
      return {
        nome: animal.nome,
        tipoAnimal: animal.tipoAnimal,
        localizacao: animal.localizacao,
        dataNascimento: dateFormat(animal.dataNascimento),
        entradaPlantel: dateFormat(animal.entradaPlantel),
        pesoCompra: animal.pesoCompra,
        raca: animal.raca,
        codigoRastreamento: animal.codigoRastreamento,
        faseProducao: animal.faseProducao,
        tipoGranja: animal.tipoGranja,
        statusAnimal: animal.statusAnimal,
      };
    };

    const valuePrepare = (): any => {
      return {
        ...getValuesUpdate(),
        faseProducao: value,
      };
    };

    const {success, data} = await updateAnimal(
      props.route.params?.animalId,
      valuePrepare(),
    );

    if (success) {
      props.changeAnimalValue({
        id: props.route.params?.animalId,
        values: data,
      });

      const v: any = data;
      realm.write(() => {
        animal[props.route.params?.animalKey] =
          v[props.route.params?.animalKey];
      });

      props.navigation.goBack();
    } else {
      alert('Não possível fazer sua alteração, sem conexão com o servidor!');
      props.navigation.goBack();
    }
  };

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-secondary'].main}
        barStyle="light-content"
      />
      <HeaderRoot>
        <HeaderContent>
          <BackButtonArea>
            <BackButton
              onPress={props.navigation.goBack}
              style={{transform: [{rotate: '180deg'}]}}>
              <ArrowBack height={24} width={24} />
            </BackButton>
          </BackButtonArea>
          <TitleArea>
            <TitleBox>
              <TitleImage
                style={topImages[props.route.params?.animalType].style}
                source={topImages[props.route.params?.animalType].url}
              />
            </TitleBox>
          </TitleArea>
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <PhaseProductionForm
          animalType={props.route.params?.animalType}
          onPressValue={(v) => updateSubmit(v)}
        />
      </ContentScreen>
    </ContainerScreen>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(animalActions, dispatch);

export const ProductionPhaseUpdatePage = connect(
  null,
  mapDispatchToProps,
)(_ProductionPhaseUpdatePage);
