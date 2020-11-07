import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import {
  TextInput as TextInputBackground,
  TextInputStyled,
} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {FilterBackgroundBox, SearchInputContent} from './styles';

export function SearchFilter() {
  return (
    <FilterBackgroundBox>
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
    </FilterBackgroundBox>
  );
}
