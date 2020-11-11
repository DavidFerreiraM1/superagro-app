/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {StackHeaderProps} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {
  BtnContentText,
  Button,
  ContainerScreen,
  Drawer,
} from '../../components';
import {DefaultColors} from '../../design-tokens';
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
} from './styles';
import {AppState} from '../../redux';
import {IAnimal} from '../../core/interfaces';
import {ContentDrawer} from './content-drawer';

interface StateProps {
  animalList: IAnimal[];
}

type Props = StateProps & StackHeaderProps;

export function _Home(props: Props) {
  const drawerRef: any = useRef();
  const openDrawer = () => {
    drawerRef.current.open();
  };

  const registerNewItemNavigate = () => {
    props.navigation.navigate('item-form-register');
  };

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
            <ButtonSelectCategory typeSelect="swine" onPress={() => {}} />
          </BoxSelect>
          <BoxSelect>
            <ButtonSelectFilterParam />
          </BoxSelect>
        </SelectContainer>
        <ListBox contentContainerStyle={{paddingBottom: 88}}>
          {props.animalList.map((m, key) => {
            return (
              <ItemBox
                key={key}
                onNavigationPress={() =>
                  props.navigation.navigate('animal-info-page')
                }
                removeItemPress={() => {}}
              />
            );
          })}
        </ListBox>
        <BottomBox>
          <Button
            variant="contained"
            color="action-primary"
            onPress={registerNewItemNavigate}>
            <BtnContentText color="action-primary">ADICIONAR</BtnContentText>
          </Button>
        </BottomBox>
      </BackgroundScreen>
      <>
        <Drawer ref={drawerRef}>
          <ContentDrawer
            onPressDrawerClose={() => {
              drawerRef.current.close();
            }}
            onPressFarmInfoNavigate={() => {
              drawerRef.current.close();
              props.navigation.navigate('farm-info-page');
            }}
            onPressUserInfoNavigate={() => {
              drawerRef.current.close();
              props.navigation.navigate('user-info-page');
            }}
          />
        </Drawer>
      </>
    </ContainerScreen>
  );
}

const mapStateToProps = (state: AppState) => ({
  animalList: state.animalList.list,
});

export const Home = connect(mapStateToProps)(_Home);
