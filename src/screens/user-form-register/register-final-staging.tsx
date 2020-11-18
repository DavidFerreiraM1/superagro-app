import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DefaultColors} from '../../styles-utils';
import {UserFormRegisterContext} from '../../context';
import {ContentScreen, FeedbackText} from './styles';
import * as userFarmActions from '../../redux/ducks/user/action';

interface DispatchProps {
  setUserlogRequest(values: any): void;
}

type Props = StackHeaderProps & DispatchProps;

export function _RegisterFinalStaging(props: Props) {
  const {values} = useContext(UserFormRegisterContext);
  const [feedback, setFeedback] = useState({
    activityIndicator: true,
    text: 'Estamos guardando os dados localmente!',
  });

  useEffect(() => {
    const saveDataOnRealm = async () => {
      props.setUserlogRequest(values);
      setTimeout(
        () =>
          setFeedback({
            activityIndicator: false,
            text: 'Os dados foram salvos com sucesso!',
          }),
        2000,
      );

      setTimeout(
        () => props.navigation.replace('client', {screen: 'home'}),
        3000,
      );
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
  bindActionCreators(userFarmActions, dispatch);

export const RegisterFinalStaging = connect(
  null,
  mapDispatchToProps,
)(_RegisterFinalStaging);
