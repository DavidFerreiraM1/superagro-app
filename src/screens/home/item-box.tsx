import React from 'react';
import ArrowIcon from '../../assets/icons/arrow-white.svg';
import TrashIcon from '../../assets/images/trash.png';
import {
  ColumnBox,
  ItemBox as ItemContainer,
  ColumnBoxRemove,
  ColumnRight,
  ValueColumn,
  TitleColumn,
  ColumnBtnRemove,
  TrashIconImage,
} from './styles';

export function ItemBox() {
  return (
    <ItemContainer>
      <ColumnBoxRemove>
        <ColumnBtnRemove>
          <TrashIconImage source={TrashIcon} />
        </ColumnBtnRemove>
      </ColumnBoxRemove>
      <ColumnBox>
        <TitleColumn>NOME</TitleColumn>
        <ValueColumn>IAH768</ValueColumn>
      </ColumnBox>
      <ColumnBox>
        <TitleColumn>RAÇA</TitleColumn>
        <ValueColumn>ui-4460/g</ValueColumn>
      </ColumnBox>
      <ColumnBox>
        <TitleColumn>STATUS</TitleColumn>
        <ValueColumn>Vendido</ValueColumn>
      </ColumnBox>
      <ColumnRight>
        <ArrowIcon height={24} width={24} />
      </ColumnRight>
    </ItemContainer>
  );
}