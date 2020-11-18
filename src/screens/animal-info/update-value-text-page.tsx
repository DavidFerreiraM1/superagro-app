/* eslint-disable no-alert */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {BtnContentText, Button, ContainerScreen} from '../../components';
import {
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
  TextInputForm,
} from '../../components/dashboard';
import {
  BottomControlContainer,
  ButtonSideBox,
  ContentScreen,
  TitleArea,
  TitleBox,
  TitleImage,
  ErrorMsgBox,
  ErrorMsgText,
} from './styles';

import ArrowBack from '../../assets/icons/arrow.svg';
import PigImage from '../../assets/images/pig.png';
import PoultryImage from '../../assets/images/poultry.png';
import {DefaultColors} from '../../styles-utils';
import * as animalActions from '../../redux/ducks/animal/action';
import {dateFormat} from '../../core/format-data-save';
import {updateAnimal} from '../../services/animal-service';
import {RealConnection} from '../../realm/realm-connection';
import {IAnimal} from '../../core/interfaces';
import {dateValidation, isEmpty} from '../../core/validations';

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

function _UpdateValueTextPage(props: Props) {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(props.route.params?.animalValue);
  }, []);

  const updateSubmit = async () => {
    if (!isEmpty(value)) {
      return setError('Campo inválido!');
    }

    if (
      (props.route.params?.animalKey === 'entradaPlantel' ||
        props.route.params?.animalKey === 'dataNascimento') &&
      !dateValidation(value)
    ) {
      return setError('Campo Inválido');
    }

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
      if (props.route.params?.animalKey === 'entradaPlantel') {
        return {
          ...getValuesUpdate(),
          entradaPlantel: dateFormat(value),
        };
      }

      if (props.route.params?.animalKey === 'dataNascimento') {
        return {
          ...getValuesUpdate(),
          dataNascimento: dateFormat(value),
        };
      }

      return {
        ...getValuesUpdate(),
        [props.route.params?.animalKey]: value,
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

      return props.navigation.goBack();
    }
    return alert(
      'Não possível fazer sua alteração, sem conexão com o servidor!',
    );
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
        <TextInputForm
          label={props.route.params?.label}
          value={value}
          onChangeText={(v) => setValue(v)}
        />
        <ErrorMsgBox>
          <ErrorMsgText>{error}</ErrorMsgText>
        </ErrorMsgBox>
      </ContentScreen>
      <BottomControlContainer>
        <ButtonSideBox>
          <Button variant="text" onPress={props.navigation.goBack}>
            <BtnContentText>Voltar</BtnContentText>
          </Button>
        </ButtonSideBox>
        <ButtonSideBox>
          <Button
            variant="contained"
            color="action-primary"
            onPress={updateSubmit}>
            <BtnContentText color="action-primary">Concluir</BtnContentText>
          </Button>
        </ButtonSideBox>
      </BottomControlContainer>
    </ContainerScreen>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(animalActions, dispatch);

export const UpdateValueTextPage = connect(
  null,
  mapDispatchToProps,
)(_UpdateValueTextPage);
