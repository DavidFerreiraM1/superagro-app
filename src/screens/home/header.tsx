import React from 'react';
import FarmIcon from '../../assets/images/farm-white.png';
import SearchIcon from '../../assets/icons/search.svg';
import {
  TextInput as TextInputBackground,
  TextInputStyled,
} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {SearchFilter} from './SearchFilter';
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
  SearchInputContent,
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
      <SearchFilter>
        <TextInputBackground variant="contained" color="brand-secondary">
          <SearchInputContent>
            <SearchIcon height={24} width={16} />
            <TextInputStyled
              placeholderTextColor={DefaultColors['brand-secondary'].main}
              placeholder="Pesquisar por localização"
              color="brand-secondary"
            />
          </SearchInputContent>
        </TextInputBackground>
      </SearchFilter>
    </HeaderRoot>
  );
}
