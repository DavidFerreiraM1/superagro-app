import React, {useState} from 'react';
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
  text: string;
  onPressOk(): void;
  onPressCancel(): void;
}

export function RemoveAnimalAlert(props: Props) {
  const [renderBottom, setRenderBottom] = useState(true);

  const onPressOk = () => {
    setRenderBottom(false);
    props.onPressOk();
  };

  return (
    <BackgroundContent>
      <RemoveAnimalAlertPaper>
        <RemoveAnimalTopContent>
          <RemoveAnimalLabel>{props.text}</RemoveAnimalLabel>
        </RemoveAnimalTopContent>
        {renderBottom ? (
          <RemoveAnimalBottom>
            <RemoveAnimalButtonSide>
              <Button
                variant="text"
                color="action-secondary"
                onPress={props.onPressCancel}>
                <BtnContentText color="action-secondary">
                  cancelar
                </BtnContentText>
              </Button>
            </RemoveAnimalButtonSide>
            <RemoveAnimalButtonSide>
              <Button
                variant="contained"
                color="action-primary"
                onPress={onPressOk}>
                <BtnContentText color="action-primary">ok</BtnContentText>
              </Button>
            </RemoveAnimalButtonSide>
          </RemoveAnimalBottom>
        ) : null}
      </RemoveAnimalAlertPaper>
    </BackgroundContent>
  );
}
