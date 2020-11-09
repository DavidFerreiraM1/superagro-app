import React from 'react';
import FarmIcon from '../../assets/images/farm-white.png';
import {ProfilePhoto} from '../../components/dashboard';

import {SearchFilter} from './search-filter';
import {
  FarmImage,
  HeaderContent,
  HeaderRoot,
  IconFarmBox,
  IconFormBoxText,
  HeaderLeftElement,
  ProfileName,
  HeaderRightElement,
} from './styles';

interface Props {
  openDrawer: () => void;
}

export function Header(props: Props) {
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
          <ProfilePhoto onPress={props.openDrawer} />
          <ProfileName>Nome do usuário</ProfileName>
        </HeaderRightElement>
      </HeaderContent>
      <SearchFilter />
    </HeaderRoot>
  );
}
