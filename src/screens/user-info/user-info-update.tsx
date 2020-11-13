/* eslint-disable @typescript-eslint/no-empty-function */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ContentScreen} from './styles';
import {TextInputForm} from '../../components/dashboard';
import {BottomControl} from './bottom-control';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../styles-utils';
import {updateInfo} from './user-info-service';
import * as userActions from '../../redux/ducks/user/action';
/**
 * value,
 * userId,
 * key,
 * label
 */
interface ActionProps {
  autoUpdateState(): any;
}

type Props = StackScreenProps<any> & ActionProps;

function _UserInfoUpdate(props: Props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.route.params?.value);
  }, []);

  const onSubmit = async () => {
    await updateInfo(
      props.route.params?.userId,
      props.route.params?.key,
      value,
    );
    props.autoUpdateState();
    props.navigation.goBack();
  };

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-primary'].main}
        barStyle="light-content"
      />
      <ContentScreen>
        <TextInputForm
          value={value}
          onChangeText={(v) => setValue(v)}
          label={props.route.params?.label}
        />
      </ContentScreen>
      <BottomControl
        back={() => {
          props.navigation.goBack();
        }}
        next={onSubmit}
      />
    </ContainerScreen>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(userActions, dispatch);

export const UserInfoUpdate = connect(
  null,
  mapDispatchToProps,
)(_UserInfoUpdate);
