import React, {useCallback, useRef, useState} from 'react';
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
  ErrorMsgBox,
  ErrorMsgText,
} from './styles';
import ImageApp from '../../assets/images/image-app.png';
import {DefaultColors} from '../../styles-utils';
import {checkEmailAndPassword} from './load-login-service';

export function LoadLoginPage(props: StackScreenProps<any>) {
  const [renderModal, setRenderModal] = useState(false);
  const modaRef: any = useRef();

  const [errorLogin, setErrorLogin] = useState('');
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const onSetLoginValues = useCallback(
    (key: string, value: string) => {
      setLoginValues({
        ...loginValues,
        [key]: value,
      });
    },
    [loginValues],
  );

  const openModal = useCallback(() => {
    setRenderModal(true);
    setTimeout(() => modaRef.current.open(), 4);
  }, [renderModal]);

  const closeModal = useCallback(() => {
    modaRef.current.close();
    setTimeout(() => setRenderModal(false), 420);
  }, [renderModal]);

  const submitLogin = async () => {
    if (
      !(await checkEmailAndPassword(loginValues.email, loginValues.password))
    ) {
      return setErrorLogin('Email e senhas inválidos ou incorretos');
    }
    return props.navigation.replace('client', {screen: 'home'});
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
              <ErrorMsgBox>
                <ErrorMsgText>{errorLogin}</ErrorMsgText>
              </ErrorMsgBox>
              <InputBox>
                <TextInput
                  placeholder="Informe seu Email cadastrado"
                  placeholderTextColor={DefaultColors['brand-primary'].main}
                  variant="contained"
                  color="brand-primary"
                  value={loginValues.email}
                  onChangeText={(v) => onSetLoginValues('email', v)}
                />
                <TextInput
                  secureTextEntry
                  placeholder="Informe sua Senha"
                  placeholderTextColor={DefaultColors['brand-primary'].main}
                  variant="contained"
                  color="brand-primary"
                  value={loginValues.password}
                  onChangeText={(v) => onSetLoginValues('password', v)}
                />
                <Button
                  onPress={submitLogin}
                  variant="contained"
                  color="action-primary">
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
