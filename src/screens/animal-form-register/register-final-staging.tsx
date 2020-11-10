import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {DefaultColors} from '../../design-tokens';
import {createAnimalIntoRealm} from './animal-service';
import {FormRegisterContext} from './form-context';
import {ContentScreen, FeedbackText} from './styles';

export function RegisterFinalStaging(props: StackHeaderProps) {
  const {values} = useContext(FormRegisterContext);
  const [feedback, setFeedback] = useState({
    activityIndicator: true,
    text: 'Estamos guardando os dados localmente!',
  });

  useEffect(() => {
    const saveDataOnRealm = () => {
      const redirectHome = (time: number) => {
        return setTimeout(() => props.navigation.navigate('home'), time);
      };

      try {
        setTimeout(async () => {
          await createAnimalIntoRealm(values);
          setFeedback({
            activityIndicator: false,
            text: 'Os dados foram salvos com sucesso!',
          });
          redirectHome(3500);
        }, 3000);
      } catch (err) {
        setFeedback({
          activityIndicator: false,
          text: 'Ocorreu um erro inesperado internamente, contate o suporte!',
        });
        redirectHome(5000);
      }
    };

    saveDataOnRealm();
  }, []);

  return (
    <ContentScreen
      style={{
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      {feedback.activityIndicator && (
        <ActivityIndicator
          size="large"
          color={DefaultColors['brand-primary'].main}
          style={{width: '100%'}}
        />
      )}
      <FeedbackText>{feedback.text}</FeedbackText>
    </ContentScreen>
  );
}
