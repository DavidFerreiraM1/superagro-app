import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DefaultColors} from '../../design-tokens';
import {createAnimalIntoRealm} from './animal-service';
import {FormRegisterContext} from './form-context';
import {ContentScreen, FeedbackText} from './styles';
import * as animalActions from '../../redux/ducks/animal/action';

interface DispatchProps {
  updateAnimalRequest: (list: any) => void;
}

type Props = StackHeaderProps & DispatchProps;

export function _RegisterFinalStaging(props: Props) {
  const {values} = useContext(FormRegisterContext);
  const [feedback, setFeedback] = useState({
    activityIndicator: true,
    text: 'Estamos guardando os dados localmente!',
  });

  useEffect(() => {
    console.log(props);
    const saveDataOnRealm = async () => {
      props.updateAnimalRequest(values);
      setTimeout(() => props.navigation.navigate('home'), 3000);
    };
    // const redirectHome = (time: number) => {
    //   // return setTimeout(() => props.navigation.navigate('home'), time);
    // };

    //   try {
    //     setTimeout(async () => {
    //       const result = await createAnimalIntoRealm(values);
    //       // props.updateAnimalRequest(result);
    //       setFeedback({
    //         activityIndicator: false,
    //         text: 'Os dados foram salvos com sucesso!',
    //       });
    //       redirectHome(3500);
    //     }, 3000);
    //   } catch (err) {
    //     setFeedback({
    //       activityIndicator: false,
    //       text: 'Ocorreu um erro inesperado internamente, contate o suporte!',
    //     });
    //     redirectHome(5000);
    //   }
    // };

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
