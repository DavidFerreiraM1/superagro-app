import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DefaultColors} from '../../styles-utils';
import {FormRegisterContext} from '../../context';
import {ContentScreen, FeedbackText} from './styles';
import * as animalActions from '../../redux/ducks/animal/action';
import {createAnimal} from '../../services/animal-service';

interface DispatchProps {
  updateAnimalRequest: (list: any) => void;
}

type Props = StackHeaderProps & DispatchProps;

export function _RegisterFinalStaging(props: Props) {
  const {values} = useContext(FormRegisterContext);
  const [feedback, setFeedback] = useState({
    activityIndicator: true,
    text: 'Aguarde!',
  });

  useEffect(() => {
    const saveDataOnRealm = async () => {
      const {success, data} = await createAnimal(values);
      if (success) {
        props.updateAnimalRequest(data);
        setTimeout(
          () =>
            setFeedback({
              activityIndicator: false,
              text: 'Os dados foram salvos com sucesso!',
            }),
          2000,
        );
        setTimeout(() => props.navigation.navigate('home'), 3000);
      } else {
        setTimeout(
          () =>
            setFeedback({
              activityIndicator: false,
              text:
                'Não foi possível criar este item, sem conexão com o servidor!',
            }),
          2000,
        );
        setTimeout(() => props.navigation.navigate('home'), 3000);
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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(animalActions, dispatch);

export const RegisterFinalStaging = connect(
  null,
  mapDispatchToProps,
)(_RegisterFinalStaging);
