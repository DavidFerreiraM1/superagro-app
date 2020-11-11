import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
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

/**
 * Precisa receber o valor da chava para ser alterada no realm
 * Chave de objeto para pegar imagem do icone no topo da tela
 * params = {
 *  label: string;
 *  animalKey: string;
 *  animalType: string;
 *  animalValue: string;
 * }
 */
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
export function UpdateValueTextPage(props: StackScreenProps<any>) {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(props.route.params);
    setValue(props.route.params?.animalValue);
  }, []);

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
          <Button variant="contained" color="action-primary">
            <BtnContentText color="action-primary">Concluir</BtnContentText>
          </Button>
        </ButtonSideBox>
      </BottomControlContainer>
    </ContainerScreen>
  );
}
