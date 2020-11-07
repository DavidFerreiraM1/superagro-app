import React from 'react';
import {BtnContentText, Button} from '../../components';
import {BottomControlContainer, ButtonSideBox} from './styles';

export function BottomControl() {
  return (
    <BottomControlContainer>
      <ButtonSideBox>
        <Button variant="text" onPress={() => alert('Voltar')}>
          <BtnContentText>Voltar</BtnContentText>
        </Button>
      </ButtonSideBox>
      <ButtonSideBox>
        <Button
          variant="contained"
          color="action-primary"
          onPress={() => alert('Próximo')}>
          <BtnContentText color="action-primary">Próximo</BtnContentText>
        </Button>
      </ButtonSideBox>
    </BottomControlContainer>
  );
}
