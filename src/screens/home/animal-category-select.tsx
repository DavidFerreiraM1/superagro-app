import React from 'react';
import {
  AnimalCategorySelectPaper,
  AnimalSelectItem,
  AnimalSelectLabel,
  AnimalSelectText,
  BgAnimalCategorySelect,
} from './styles';

interface Props {
  value: string;
  openPessValue(v: string): void;
}

export function AnimalCategorySelect(props: Props) {
  return (
    <BgAnimalCategorySelect>
      <AnimalCategorySelectPaper>
        <AnimalSelectLabel>Selecione um categoria</AnimalSelectLabel>
        <AnimalSelectItem
          active={props.value === 'all'}
          onPress={() => props.openPessValue('all')}>
          <AnimalSelectText active={props.value === 'all'}>
            Ambos
          </AnimalSelectText>
        </AnimalSelectItem>
        <AnimalSelectItem
          active={props.value === 'swine'}
          onPress={() => props.openPessValue('swine')}>
          <AnimalSelectText active={props.value === 'swine'}>
            Suínos
          </AnimalSelectText>
        </AnimalSelectItem>
        <AnimalSelectItem
          active={props.value === 'poultry'}
          onPress={() => props.openPessValue('poultry')}>
          <AnimalSelectText active={props.value === 'poultry'}>
            Aves
          </AnimalSelectText>
        </AnimalSelectItem>
      </AnimalCategorySelectPaper>
    </BgAnimalCategorySelect>
  );
}
