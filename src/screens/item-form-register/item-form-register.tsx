/* eslint-disable react/no-array-index-key */
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {BottomControl} from './bottom-control';
import {Header} from './header';
import {TextInputForm} from './text-input-form';
import {CategoryInputSelect} from './category-input-select';
import {ContentScreen, FormArea} from './styles';
import {TypeInputselect} from './type-input-select';
import {productionPhase, formKeys, farmType} from './datas';
import {StatusSelectType} from './status-select-type';

export function ItemFormRegister() {
  const [formActive, setFormActive] = useState(0);
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

  useEffect(() => {
    console.log('VALOR ALTERADO', values);
  }, [values]);

  const setFormValue = useCallback(
    (field: string, value: string) => {
      setValues({
        ...values,
        [field]: value,
      });
    },
    [values],
  );

  const nextFormActive = useCallback(() => {
    setFormActive(formActive + 1);
  }, [formActive]);

  const backFormActive = useCallback(() => {
    setFormActive(formActive - 1);
  }, [formActive]);

  return (
    <ContainerScreen>
      <StatusBar
        backgroundColor={DefaultColors['brand-secondary'].main}
        barStyle="light-content"
      />
      <Header />
      <ContentScreen>
        <FormArea>
          <TextInputForm
            label="Defina um nome para o novo item"
            formKey="nome"
            formKeyActive={formKeys[formActive]}
            value={values.nome}
            onChangeText={(v) => setValues({...values, nome: v})}
          />
        </FormArea>
      </ContentScreen>
      <BottomControl back={backFormActive} next={nextFormActive} />
    </ContainerScreen>
  );
}
