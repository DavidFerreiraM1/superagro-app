import React, {useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  BottomModal,
  BtnContentText,
  Button,
  ContainerScreen,
  TextInput,
} from '../../components';
import {
  BottomComponents,
  ButtonClose,
  ButtonCloseBox,
  ButtonCloseSide,
  ContentScreen,
  ImageApp as Img,
  ImageAppBox,
  InputBox,
  ModalContent,
  ModalHeader,
  TextSide,
  Title,
} from './styles';
import ImageApp from '../../assets/images/image-app.png';
import {DefaultColors} from '../../styles-utils';

export function LoadLoginPage(props: StackScreenProps<any>) {
  const [renderModal, setRenderModal] = useState(false);
  const modaRef: any = useRef();

  const openModal = () => {
    setRenderModal(true);
    setTimeout(() => modaRef.current.open(), 4);
  };

  const closeModal = () => {
    modaRef.current.close();
    setTimeout(() => setRenderModal(false), 420);
  };

  const formRegisterNavigate = () => {
    props.navigation.navigate('user-form-register');
  };

  return (
    <ContainerScreen>
      <StatusBar
        barStyle="light-content"
        backgroundColor={DefaultColors['brand-secondary'].main}
      />
      <ContentScreen>
        <ImageAppBox>
          <Img source={ImageApp} />
        </ImageAppBox>
      </ContentScreen>
      <BottomComponents>
        <Button
          variant="contained"
          color="action-primary"
          onPress={formRegisterNavigate}>
          <BtnContentText color="action-primary">Cadastrar</BtnContentText>
        </Button>
        <Button
          variant="contained"
          color="action-secondary"
          onPress={openModal}>
          <BtnContentText color="action-secondary">Login</BtnContentText>
        </Button>
      </BottomComponents>
      <>
        {renderModal ? (
          <BottomModal height={320} ref={modaRef}>
            <ModalContent>
              <ModalHeader>
                <TextSide>
                  <Title>Login</Title>
                </TextSide>
                <ButtonCloseSide>
                  <ButtonCloseBox>
                    <ButtonClose onPress={closeModal} />
                  </ButtonCloseBox>
                </ButtonCloseSide>
              </ModalHeader>
              <InputBox>
                <TextInput
                  placeholder="Usuário"
                  placeholderTextColor={DefaultColors['brand-primary'].main}
                  variant="contained"
                  color="brand-primary"
                />
                <TextInput
                  secureTextEntry
                  placeholder="Senha"
                  placeholderTextColor={DefaultColors['brand-primary'].main}
                  variant="contained"
                  color="brand-primary"
                />
                <Button variant="contained" color="action-primary">
                  <BtnContentText color="action-primary">Entrar</BtnContentText>
                </Button>
              </InputBox>
            </ModalContent>
          </BottomModal>
        ) : null}
      </>
    </ContainerScreen>
  );
}
