import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  BackButton,
  BackButtonArea,
  HeaderContent,
  HeaderRoot,
  TitleArea,
} from './styles';
import ArrowBack from '../../assets/icons/arrow.svg';

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
        <TitleArea />
      </HeaderContent>
    </HeaderRoot>
  );
}
