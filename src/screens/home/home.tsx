/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {StackHeaderProps} from '@react-navigation/stack';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {
  BottomModal,
  BtnContentText,
  Button,
  ContainerScreen,
  Drawer,
} from '../../components';
import {DefaultColors} from '../../styles-utils';
import {
  AnimalCategoryForm,
  ButtonSelectCategory,
} from '../../components/dashboard';
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
import {paginator} from '../../utils/paginator';

interface StateProps {
  animalList: AnimalListState;
}

interface ActionProps {
  insertRealmDataOnState(): void;
}

type Props = StateProps & StackHeaderProps & ActionProps;

export function _Home(props: Props) {
  const [listState, setListState] = useState<any>({
    page: 1,
    list: {},
    viewList: [],
  });

  const [filterState, setFilterState] = useState({
    animalType: 'swine',
    param: 'localizacao',
    value: '',
  });

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

  const filter = () => {
    return setListState({
      ...listState,
      viewList: props.animalList.list.filter(
        (animal: any) =>
          animal.tipoAnimal === filterState.animalType &&
          animal[filterState.param].toLowerCase().includes(filterState.value),
      ),
    });
  };

  useEffect(() => {
    filter();
  }, [filterState]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      props.insertRealmDataOnState();
    });
  }, []);

  const setPaginate = () => {
    setListState({
      ...listState,
      viewList: [...listState.viewList, ...listState.list[listState.page + 1]],
    });
  };

  useEffect(() => {
    const resultPaginator = paginator(props.animalList.list);
    setListState({
      ...listState,
      list: resultPaginator,
      viewList: [...resultPaginator[1]],
    });
  }, [props.animalList.list]);

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-primary'].main}
        barStyle="light-content"
      />
      <BackgroundScreen>
        <Header
          openDrawer={openDrawer}
          value={filterState.value}
          onChangeText={(v) =>
            setFilterState({
              ...filterState,
              value: v,
            })
          }
        />
        <SelectContainer>
          <BoxSelect>
            <ButtonSelectCategory
              disabled={!disableButtons()}
              typeSelect={filterState.animalType}
              onPress={() => {
                Alert.alert(
                  'Selecione uma opção',
                  'Filtrar lista por',
                  [
                    {
                      text: 'Suínos',
                      onPress: () =>
                        setFilterState({
                          ...filterState,
                          animalType: 'swine',
                        }),
                      style: 'cancel',
                    },
                    {
                      text: 'Aves',
                      onPress: () =>
                        setFilterState({
                          ...filterState,
                          animalType: 'poultry',
                        }),
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
          </BoxSelect>
          <BoxSelect>
            <ButtonSelectFilterParam
              text={filterState.param}
              disabled={!disableButtons()}
              onPress={() => {
                Alert.alert(
                  'Selecione uma opção',
                  'Filtrar lista por',
                  [
                    {
                      text: 'Localização',
                      onPress: () =>
                        setFilterState({
                          ...filterState,
                          param: 'localizacao',
                        }),
                      style: 'cancel',
                    },
                    {
                      text: 'Nome',
                      onPress: () =>
                        setFilterState({
                          ...filterState,
                          param: 'nome',
                        }),
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
          </BoxSelect>
        </SelectContainer>
        {!props.animalList.success && (
          <ResponseErrorText>
            Não foi possível recuperar a listagem
          </ResponseErrorText>
        )}
        <ListBox
          contentContainerStyle={{paddingBottom: 88}}
          renderItem={({item, index}: any) => (
            <ItemBox
              key={index.toString()}
              name={item.nome}
              specie={item.raca}
              status={item.statusAnimal}
              onNavigationPress={() => navigateToAnimalInfoScreen(item.id)}
              removeItemPress={() => {}}
            />
          )}
          data={listState.viewList}
          keyExtractor={(item: any, index: any) =>
            index.toString() + item.id + new Date().getTime().toString()
          }
          onEndReached={setPaginate}
          refreshControl={
            <RefreshControl
              refreshing={props.animalList.loading}
              size={4}
              onRefresh={() => {
                props.insertRealmDataOnState();
              }}
            />
          }
        />
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
