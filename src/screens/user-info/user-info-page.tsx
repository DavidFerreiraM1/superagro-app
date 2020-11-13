import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {StackHeaderProps, StackScreenProps} from '@react-navigation/stack';
import {ContainerScreen} from '../../components';
import {
  BackButton,
  BackButtonArea,
  FieldPropertyInfo,
  HeaderContent,
  HeaderRoot,
  ProfilePhoto,
} from '../../components/dashboard';
import ArrowBack from '../../assets/icons/arrow.svg';
import {DefaultColors} from '../../styles-utils';
import {ContentScreen, FieldBox} from './styles';
import {getUserInfo} from './user-info-service';

const defaultColor = DefaultColors['brand-primary'].main;

type Props = StackScreenProps<any>;

export function UserInfoPage(props: Props) {
  const [userValues, setUserValues] = useState({
    userId: '',
    username: '',
    email: '',
    password: '',
    farmName: '',
  });

  const onNavigation = (
    value: string,
    userId: string,
    key: string,
    label: string,
  ) => {
    props.navigation.navigate('user-info-update', {
      value,
      key,
      userId,
      label,
    });
  };

  useEffect(() => {
    const get = async () => {
      const result = await getUserInfo();
      setUserValues({
        userId: result.userId,
        username: result.username,
        email: result.email,
        password: result.password,
        farmName: result.farmName,
      });
    };
    props.navigation.addListener('focus', () => get());
  }, []);

  return (
    <ContainerScreen>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <HeaderRoot style={{backgroundColor: defaultColor}}>
        <HeaderContent>
          <BackButtonArea>
            <BackButton
              onPress={() => props.navigation.navigate('home')}
              style={{transform: [{rotate: '180deg'}]}}>
              <ArrowBack height={24} width={24} />
            </BackButton>
          </BackButtonArea>
          <ProfilePhoto />
        </HeaderContent>
      </HeaderRoot>
      <ContentScreen>
        <FieldBox>
          <FieldPropertyInfo
            propertyName="Nome"
            propertyValue={userValues.username}
            onPress={() =>
              onNavigation(
                userValues.username,
                userValues.userId,
                'username',
                'Alterar nome',
              )
            }
          />
          <FieldPropertyInfo
            propertyName="Email"
            propertyValue={userValues.email}
            onPress={() =>
              onNavigation(
                userValues.email,
                userValues.userId,
                'email',
                'Alterar email',
              )
            }
          />
          <FieldPropertyInfo
            propertyName="Senha cadastrada"
            propertyValue="******"
            onPress={() =>
              onNavigation(
                userValues.password,
                userValues.userId,
                'password',
                'Alterar Senha',
              )
            }
          />
          <FieldPropertyInfo
            propertyName="Novo nome da granja"
            propertyValue={userValues.farmName}
            onPress={() =>
              onNavigation(
                userValues.farmName,
                userValues.userId,
                'farmname',
                'Alterar nome da granja',
              )
            }
          />
        </FieldBox>
      </ContentScreen>
    </ContainerScreen>
  );
}
