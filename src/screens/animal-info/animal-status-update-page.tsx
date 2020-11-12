import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {BtnContentText, Button, ContainerScreen} from '../../components';
import {
  AnimalStatusForm,
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
} from '../../components/dashboard';
import {
  BottomControlContainer,
  ButtonSideBox,
  ContentScreenSencondary,
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

function _AnimalStatusUpdatePage(props: Props) {
  const updateSubmit = async (value: string) => {
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
      <ContentScreenSencondary>
        <AnimalStatusForm onPressValue={(v) => updateSubmit(v)} />
      </ContentScreenSencondary>
    </ContainerScreen>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(animalActions, dispatch);

export const AnimalStatusUpdatePage = connect(
  null,
  mapDispatchToProps,
)(_AnimalStatusUpdatePage);
