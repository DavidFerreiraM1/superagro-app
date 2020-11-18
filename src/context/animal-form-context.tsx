/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from 'react';

export const FormRegisterContext = createContext({
  values: {
    tipoAnimal: '', // select
    nome: '', // text
    localizacao: '', // text
    dataNascimento: '', // text - data
    entradaPlantel: '', // text - data
    pesoCompra: '', // text
    raca: '', // text
    codigoRastreamento: '', // text
    faseProducao: '', // select
    tipoGranja: '', // select
    statusAnimal: '', // select
  },
  setFormValues: (key: string, value: string) => {},
});

export function FormRegister(props: any) {
  const [values, setValues] = useState({
    tipoAnimal: '',
    nome: '',
    localizacao: '',
    dataNascimento: '',
    entradaPlantel: '',
    pesoCompra: '',
    raca: '',
    codigoRastreamento: '',
    faseProducao: '',
    tipoGranja: '',
    statusAnimal: '',
  });

  const setFormValues = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <FormRegisterContext.Provider value={{values, setFormValues}}>
      {props.children}
    </FormRegisterContext.Provider>
  );
}
