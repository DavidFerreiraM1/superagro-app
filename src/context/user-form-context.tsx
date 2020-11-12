/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from 'react';

export const UserFormRegisterContext = createContext({
  values: {
    id: '',
    username: '',
    cpf: '',
    password: '',
    isLogged: false,
    farmName: '',
    cnpj: '',
    ownerID: '',
    active: false,
  },
  setFormValues: (key: string, value: string) => {},
});

export function UserFormRegister(props: any) {
  const [values, setValues] = useState({
    id: '',
    username: '',
    cpf: '',
    password: '',
    isLogged: false,
    farmName: '',
    cnpj: '',
    ownerID: '',
    active: false,
  });

  const setFormValues = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <UserFormRegisterContext.Provider value={{values, setFormValues}}>
      {props.children}
    </UserFormRegisterContext.Provider>
  );
}
