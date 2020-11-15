/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {StackHeaderProps} from '@react-navigation/stack';
import {ActivityIndicator, RefreshControl, StatusBar, Text} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {
  BtnContentText,
  Button,
  ContainerScreen,
  Drawer,
} from '../../components';
import {DefaultColors} from '../../styles-utils';
import {ButtonSelectCategory} from '../../components/dashboard';
import {ButtonSelectFilterParam} from './button-select-filter-param';
import {Header} from './header';
import {ItemBox} from './item-box';
import {
  BackgroundScreen,
  BottomBox,
  ListBox,
  BoxSelect,
  SelectContainer,
  ResponseErrorText,
} from './styles';
import {AppState} from '../../redux';
import {IAnimal} from '../../core/interfaces';
import {ContentDrawer} from './content-drawer';
import * as animalActions from '../../redux/ducks/animal/action';
import {logout} from './home-service';
import {AnimalListState} from '../../redux/ducks/animal/types';

interface StateProps {
  animalList: AnimalListState;
}

interface ActionProps {
  insertRealmDataOnState(): void;
}

type Props = StateProps & StackHeaderProps & ActionProps;

export function _Home(props: Props) {
  const drawerRef: any = useRef();
  const [drawaerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
    setTimeout(() => drawerRef.current.open(), 2);
  };
  const closeDrawer = () => {
    drawerRef.current.close();
    setTimeout(() => setDrawerIsOpen(false), 420);
  };

  const registerNewItemNavigate = () => {
    if (drawaerIsOpen) {
      closeDrawer();
    }
    props.navigation.navigate('item-form-register');
  };

  const navigateToAnimalInfoScreen = (id?: string) => {
    props.navigation.navigate('animal-info-page', {
      screen: 'list-page',
      params: {animalId: id},
    });
  };

  const onLogout = async () => {
    await logout();
    props.navigation.replace('public');
  };

  const disableButtons = () => {
    return !props.animalList.loading;
  };

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      props.insertRealmDataOnState();
    });
  }, []);

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-primary'].main}
        barStyle="light-content"
      />
      <BackgroundScreen>
        <Header openDrawer={openDrawer} />
        <SelectContainer>
          <BoxSelect>
            <ButtonSelectCategory
              disabled={disableButtons()}
              typeSelect="swine"
              onPress={() => {}}
            />
          </BoxSelect>
          <BoxSelect>
            <ButtonSelectFilterParam disabled={disableButtons()} />
          </BoxSelect>
        </SelectContainer>
        <ListBox
          contentContainerStyle={{paddingBottom: 88}}
          refreshControl={
            <RefreshControl
              refreshing={props.animalList.loading}
              size={4}
              onRefresh={() => {
                props.insertRealmDataOnState();
              }}
            />
          }>
          {!props.animalList.success && (
            <ResponseErrorText>
              Não foi possível recuperar a listagem
            </ResponseErrorText>
          )}
          {props.animalList.list.map((m, key) => {
            return (
              <ItemBox
                key={key}
                name={m.nome}
                specie={m.raca}
                status={m.statusAnimal}
                onNavigationPress={() => navigateToAnimalInfoScreen(m.id)}
                removeItemPress={() => {}}
              />
            );
          })}
        </ListBox>
        <BottomBox>
          {disableButtons() && (
            <Button
              variant="contained"
              color="action-primary"
              onPress={registerNewItemNavigate}>
              <BtnContentText color="action-primary">ADICIONAR</BtnContentText>
            </Button>
          )}
        </BottomBox>
      </BackgroundScreen>
      <>
        {drawaerIsOpen ? (
          <Drawer ref={drawerRef}>
            <ContentDrawer
              onPressDrawerClose={closeDrawer}
              onPressLogout={onLogout}
              onPressUserInfoNavigate={() => {
                closeDrawer();
                props.navigation.navigate('user-info-page');
              }}
            />
          </Drawer>
        ) : null}
      </>
    </ContainerScreen>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(animalActions, dispatch);

const mapStateToProps = (state: AppState) => ({
  animalList: state.animalList,
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
