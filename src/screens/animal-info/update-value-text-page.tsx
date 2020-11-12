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
} from './styles';

import ArrowBack from '../../assets/icons/arrow.svg';
import PigImage from '../../assets/images/pig.png';
import PoultryImage from '../../assets/images/poultry.png';
import {DefaultColors} from '../../design-tokens';
import * as animalActions from '../../redux/ducks/animal/action';

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
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(props.route.params?.animalValue);
  }, []);

  const updateSubmit = async () => {
    props.changeAnimalValue({
      id: props.route.params?.animalId,
      animalKey: props.route.params?.animalKey,
      value,
    });
    props.navigation.goBack();
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
