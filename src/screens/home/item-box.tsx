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
