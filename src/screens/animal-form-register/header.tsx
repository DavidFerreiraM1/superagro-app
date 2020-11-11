import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import PoultryImage from '../../assets/images/poultry.png';
import PigImage from '../../assets/images/pig.png';
import {
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
  TitleArea,
  TitleBox,
  TitleImage,
} from './styles';
import ArrowBack from '../../assets/icons/arrow.svg';
import {FormRegisterContext} from '../../context';

/**
 * Valores mudam entre as imagens
 * pig - height: 29, width: 43
 * poultry - height: 42, width: 45
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

export function Header() {
  const {name} = useRoute();
  const {goBack} = useNavigation();
  const {values} = useContext(FormRegisterContext);

  return (
    <HeaderRoot>
      <HeaderContent>
        <BackButtonArea>
          <BackButton
            onPress={goBack}
            style={{transform: [{rotate: '180deg'}]}}>
            <ArrowBack height={24} width={24} />
          </BackButton>
        </BackButtonArea>
        <TitleArea>
          <TitleBox>
            {name !== 'animal-type' && (
              <TitleImage
                style={topImages[values.tipoAnimal].style}
                source={topImages[values.tipoAnimal].url}
              />
            )}
          </TitleBox>
        </TitleArea>
      </HeaderContent>
    </HeaderRoot>
  );
}
