import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PoultryImage from '../../assets/images/poultry.png';
import PigImage from '../../assets/images/pig.png';
import {
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
  NewItemDescription,
  TitleArea,
  TitleBox,
  TitleImage,
} from './styles';
import ArrowBack from '../../assets/icons/arrow.svg';

/**
 * Valores mudam entre as imagens
 * pig - height: 29, width: 43
 * poultry - height: 42, width: 45
 */

// const topImages = {
//   pig: {
//     url: PigImage,
//     text: 'Suínos',
//     style: {height: 29, width: 43},
//   },
//   poultry: {
//     url: PoultryImage,
//     text: 'Aves',
//     style: {height: 42, width: 45},
//   },
// };

export function Header() {
  const {goBack} = useNavigation();
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
            <TitleImage source={PoultryImage} />
            <NewItemDescription>Aves</NewItemDescription>
          </TitleBox>
        </TitleArea>
      </HeaderContent>
    </HeaderRoot>
  );
}
