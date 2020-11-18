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

export function AnimalParamSelect(props: Props) {
  return (
    <BgAnimalCategorySelect>
      <AnimalCategorySelectPaper>
        <AnimalSelectLabel>Selecione um parâmetro de busca</AnimalSelectLabel>
        <AnimalSelectItem
          active={props.value === 'nome'}
          onPress={() => props.openPessValue('nome')}>
          <AnimalSelectText active={props.value === 'nome'}>
            nome
          </AnimalSelectText>
        </AnimalSelectItem>
        <AnimalSelectItem
          active={props.value === 'localizacao'}
          onPress={() => props.openPessValue('localizacao')}>
          <AnimalSelectText active={props.value === 'localizacao'}>
            localização
          </AnimalSelectText>
        </AnimalSelectItem>
      </AnimalCategorySelectPaper>
    </BgAnimalCategorySelect>
  );
}
