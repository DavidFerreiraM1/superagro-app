import React from 'react';
import {TextInputProps} from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';
import {
  TextInput as TextInputBackground,
  TextInputStyled,
} from '../../components';
import {DefaultColors} from '../../styles-utils';
import {FilterBackgroundBox, SearchInputContent} from './styles';

type Props = TextInputProps;

export function SearchFilter(props: Props) {
  return (
    <FilterBackgroundBox>
      <TextInputBackground variant="contained" color="brand-secondary">
        <SearchInputContent>
          <SearchIcon height={24} width={16} />
          <TextInputStyled
            {...props}
            placeholderTextColor={DefaultColors['brand-secondary'].main}
            placeholder="Pesquisar"
            color="brand-secondary"
          />
        </SearchInputContent>
      </TextInputBackground>
    </FilterBackgroundBox>
  );
}
