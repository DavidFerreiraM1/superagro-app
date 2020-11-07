import React from 'react';
import FarmIcon from '../../assets/images/farm-white.png';
import {
  FarmImage,
  HeaderContent,
  HeaderRoot,
  IconFarmBox,
  IconFormBoxText,
  LeftElement,
  ProfileBackground,
  ProfileName,
  RightElement,
} from './styles';

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContent>
        <LeftElement>
          <IconFarmBox>
            <FarmImage source={FarmIcon} />
          </IconFarmBox>
          <IconFormBoxText>Granja Comary</IconFormBoxText>
        </LeftElement>
        <RightElement>
          <ProfileBackground />
          <ProfileName>Nome do usuário</ProfileName>
        </RightElement>
      </HeaderContent>
    </HeaderRoot>
  );
}
