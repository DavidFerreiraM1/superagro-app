import React from 'react';
import ArrowIcon from '../../assets/icons/arrow.svg';
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

interface Props {
  onNavigationPress: () => void;
  removeItemPress: () => void;
  name: string;
  specie: string;
  status: string;
}

export function ItemBox(props: Props) {
  return (
    <ItemContainer onPress={props.onNavigationPress}>
      <ColumnBoxRemove>
        <ColumnBtnRemove onPress={props.removeItemPress}>
          <TrashIconImage source={TrashIcon} />
        </ColumnBtnRemove>
      </ColumnBoxRemove>
      <ColumnBox>
        <TitleColumn>NOME</TitleColumn>
        <ValueColumn>{props.name}</ValueColumn>
      </ColumnBox>
      <ColumnBox>
        <TitleColumn>RAÇA</TitleColumn>
        <ValueColumn>{props.specie}</ValueColumn>
      </ColumnBox>
      <ColumnBox>
        <TitleColumn>STATUS</TitleColumn>
        <ValueColumn>{props.status}</ValueColumn>
      </ColumnBox>
      <ColumnRight>
        <ArrowIcon height={24} width={24} />
      </ColumnRight>
    </ItemContainer>
  );
}
