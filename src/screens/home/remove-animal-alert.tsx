import React from 'react';
import {View} from 'react-native';
import {BtnContentText, Button} from '../../components';
import {
  BgAnimalCategorySelect as BackgroundContent,
  RemoveAnimalAlertPaper,
  RemoveAnimalBottom,
  RemoveAnimalButtonSide,
  RemoveAnimalLabel,
  RemoveAnimalTopContent,
} from './styles';

interface Props {
  onPressOk(): void;
  onPressCancel(): void;
}

export function RemoveAnimalAlert(props: Props) {
  return (
    <BackgroundContent>
      <RemoveAnimalAlertPaper>
        <RemoveAnimalTopContent>
          <RemoveAnimalLabel>Confirme a remoção deste item!</RemoveAnimalLabel>
        </RemoveAnimalTopContent>
        <RemoveAnimalBottom>
          <RemoveAnimalButtonSide>
            <Button
              variant="text"
              color="action-secondary"
              onPress={props.onPressCancel}>
              <BtnContentText color="action-secondary">cancelar</BtnContentText>
            </Button>
          </RemoveAnimalButtonSide>
          <RemoveAnimalButtonSide>
            <Button
              variant="contained"
              color="action-primary"
              onPress={props.onPressOk}>
              <BtnContentText color="action-primary">ok</BtnContentText>
            </Button>
          </RemoveAnimalButtonSide>
        </RemoveAnimalBottom>
      </RemoveAnimalAlertPaper>
    </BackgroundContent>
  );
}
