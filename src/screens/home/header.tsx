import React from 'react';
import FarmIcon from '../../assets/images/farm-white.png';
import {
  FarmImage,
  HeaderContent,
  HeaderRoot,
  IconFarmBox,
  IconFormBoxText,
  HeaderLeftElement,
  ProfileBackground,
  ProfileName,
  HeaderRightElement,
} from './styles';

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContent>
        <HeaderLeftElement>
          <IconFarmBox>
            <FarmImage source={FarmIcon} />
          </IconFarmBox>
          <IconFormBoxText>Granja Comary</IconFormBoxText>
        </HeaderLeftElement>
        <HeaderRightElement>
          <ProfileBackground />
          <ProfileName>Nome do usuário</ProfileName>
        </HeaderRightElement>
      </HeaderContent>
    </HeaderRoot>
  );
}
