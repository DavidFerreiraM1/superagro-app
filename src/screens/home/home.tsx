/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {StackHeaderProps} from '@react-navigation/stack';
import {Alert, RefreshControl, StatusBar} from 'react-native';
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
    param: 'nome',
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

  const setPaginate = () => {
    if (listState.list[listState.page + 1] !== undefined) {
      setListState({
        ...listState,
        page: listState.page + 1,
        viewList: [
          ...listState.viewList,
          ...listState.list[listState.page + 1],
        ],
      });
    }
  };

  const filter = (v: string, animalType: string, param: string) => {
    const valuePaginated = paginator(props.animalList.list);

    setFilterState({
      ...filterState,
      value: v,
      animalType,
      param,
    });

    if (animalType === 'all') {
      return setListState({
        ...listState,
        page: 1,
        list: valuePaginated,
        viewList: valuePaginated[1],
      });
    }

    const result = paginator(
      props.animalList.list.filter(
        (animal: any) =>
          animal.tipoAnimal === animalType &&
          animal[param].toLowerCase().includes(v.toLowerCase()),
      ),
    );

    return setListState({
      ...listState,
      page: 1,
      list: result,
      viewList: result[1],
    });
  };

  useEffect(() => {
    props.insertRealmDataOnState();
  }, []);

  useEffect(() => {
    filter('', 'all', 'nome');
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
            filter(v, filterState.animalType, filterState.param)
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
                      text: 'Todos',
                      onPress: () =>
                        filter(filterState.value, 'all', filterState.param),
                      style: 'cancel',
                    },
                    {
                      text: 'Suínos',
                      onPress: () =>
                        filter(filterState.value, 'swine', filterState.param),
                      style: 'cancel',
                    },
                    {
                      text: 'Aves',
                      onPress: () =>
                        filter(filterState.value, 'poultry', filterState.param),
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
                setListState({
                  ...listState,
                  viewList: [],
                });
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
