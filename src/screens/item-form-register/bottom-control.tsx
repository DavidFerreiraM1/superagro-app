import React from 'react';
import {BtnContentText, Button} from '../../components';
import {BottomControlContainer, ButtonSideBox} from './styles';

interface Props {
  next: () => any;
  back: () => any;
}

export function BottomControl(props: Props) {
  return (
    <BottomControlContainer>
      <ButtonSideBox>
        <Button variant="text" onPress={props.back}>
          <BtnContentText>Voltar</BtnContentText>
        </Button>
      </ButtonSideBox>
      <ButtonSideBox>
        <Button variant="contained" color="action-primary" onPress={props.next}>
          <BtnContentText color="action-primary">Próximo</BtnContentText>
        </Button>
      </ButtonSideBox>
    </BottomControlContainer>
  );
}
