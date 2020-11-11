/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from 'react';

export const FormRegisterContext = createContext({
  values: {},
  setFormValues: (key: string, value: string) => {},
});

export function FormRegister(props: any) {
  const [values, setValues] = useState({});

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
