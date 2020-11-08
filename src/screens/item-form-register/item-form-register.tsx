/* eslint-disable react/no-array-index-key */
import React, {useCallback, useState} from 'react';
import {StatusBar} from 'react-native';
import {ContainerScreen} from '../../components';
import {DefaultColors} from '../../design-tokens';
import {BottomControl} from './bottom-control';
import {Header} from './header';
import {TextInputForm} from './text-input-form';
import {CategoryInputSelect} from './category-input-select';
import {ContentScreen, FormArea} from './styles';
import {TypeInputselect} from './type-input-select';
import {productionPhase} from './datas';

/*
 {
        "id":"0013c46a-f50f-4072-a165-f14aed3d3750",
        "tipoAnimal":"POULTRY",
        "nome":"SAX648",
        "statusAnimal":3,
        "localizacao":"Sala 5",
        "dataNascimento":"2017-06-29 02:53",
        "entradaPlantel":"2019-06-16",
        "pesoCompra":98.934,
        "raca":"ac-7077/m",
        "codigoRastreamento":"742B7DC9863349D2A88A9AE6AC3DDABD",
        "faseProducao":{
          swine: [
            {
              initials: 'MAT',
              descricao: 'Fase onde as fêmeas gestantes vão parir e amamentar leitões.'
            },
            {
              initials: 'CRE',
              descricao: 'Fase onde leitões desmamados são alimentados até 23 Kg'
            },
            {
              initials: 'TER',
              descricao: 'Fase onde leitões descrechados são alimentados até o final (abate)'
            },
            {
              initials: 'GESG',
              descricao: 'Fase onde temos fêmeas (leitoas e matrizes) e machos (ou sêmen) onde o foco principal é cobertura e cuidar da gestação das matrizes.'
            }
          ],
          poultry: [
            {
              initials: 'ENG',
              descricao: 'Fase onde os pintinhos são alimentados até o final (abate)'
            },
            {
              initials: 'REC',
              descricao: 'Fase onde pintinhos são criados até virarem frangas ou frango, criados em galpões separados (+-1 dia até 23/24 semanas)'
            },
            {
              initials: 'INC',
              descricao: 'Fase onde os ovos férteis são incubados e eclodidos: produção de pintos de 1 dia'
            },
            {
              initials: 'PRO',
              descricao: 'Fase de produção de ovos férteis -  galinhas e galos em um mesmo galpão (+- relação de 1:10)'
            }
          ]
        },
        "tipoGranja": {
          poultry: [
            { initials: 'URE', descricao: 'Recria' },
            { initials: 'UCC', descricao: 'Ciclo Completo' },
            { initials: 'UPM', descricao: 'Matrizes' },
            { initials: 'UIN', descricao: 'Incubatório' },
            { initials: 'UPO', descricao: 'Produção' },
            { initials: 'UEN', descricao: 'Engorda' }
          swine: [
            { initials: 'UCC', descricao: 'Ciclo Completo' },
            { initials: 'UPL', descricao: 'Produtora de Leitões' },
            { initials: 'UPD', descricao: 'Produtora de desmamados' },
            { initials: 'UTE', descricao: 'Terminador' },
            { initials: 'UCR', descricao: 'Crechário' }
          ]
        }
    },
 */

/**
 * 
  | Id                     | Valor no formato UUID.                                                  |   |   |   |
  | Nome                   | Nome do animal na granja.                                               |   |   |   |
  | Tipo do animal         | Constante com os seguintes valores: POULTRY, SWINE                      |   |   |   |
  | Status do animal       | Possíveis valores: 0 - Ativo, 1 - Inativo, 2 - Vendido, 3 - Descartado. |   |   |   |
  | Localização            | Texto com a descrição da localização do animal na granja.               |   |   |   |
  | Data de nascimento     | Data de nascimento do animal.                                           |   |   |   |
  | Entrada no plantel     | Data da compra do animal.                                               |   |   |   |
  | Peso na compra         | Valor em kg.                                                            |   |   |   |
  | Raça                   | Identificador da raça do animal.                                        |   |   |   |
  | Código de rastreamento | Identificação para rastreamento do animal.                              |   |   |   |
  | Fase de produção       | Fase de produção ao qual o animal pertence. Exibir a descrição.         |   |   |   |
  | Tipo da granja         | Tipo da granja ao qual o animal pertence. Exibir a descrição.           |   |   |   |
 *
 */
const formKeys = [
  {
    keyName: 'nome',
    label: 'Informe um nome para o item',
  },
  {
    keyName: 'tipoAnimal',
    label: '',
  },
  {
    keyName: 'statusAnimal',
    label: '',
  },
  {
    keyName: 'localizacao',
    label: 'Onde este item ficará alojado?',
  },
  {
    keyName: 'dataNascimento',
    label: 'Informe a data de nascimento',
  },
  {
    keyName: 'entradaPlantel',
    label: 'Qual a data de entrada?',
  },
  {
    keyName: 'pesoCompra',
    label: 'Informe o Peso da compra em KG',
  },
  {
    keyName: 'raca',
    label: 'Agora nos informe a raça',
  },
  {
    keyName: 'codigoRastreamento',
    label: 'Informe o código de rastreamento',
  },
  {
    keyName: 'faseProducao',
    label: 'Qual a fase de produção',
  },
  {
    keyName: 'tipoGranja',
    label: 'Qual tipo da granja',
  },
];

export function ItemFormRegister() {
  const [formActive, setFormActive] = useState(0);
  const [values, setValues] = useState({
    nome: '',
    tipoAnimal: '',
    statusAnimal: '',
    localizacao: '',
    dataNascimento: '',
    entradaPlantel: '',
    pesoCompra: '',
    raca: '',
    codigoRastreamento: '',
    faseProducao: '',
    tipoGranja: '',
  });

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
          {formKeys.map((form, key) => {
            switch (formKeys[formActive].keyName) {
              case 'tipoAnimal':
                return (
                  <TypeInputselect
                    key={key}
                    labelText="Informe a fase de produção"
                    formKey={form.keyName}
                    formKeyActive={formKeys[formActive].keyName}
                    data={productionPhase.swine}
                  />
                  // <CategoryInputSelect
                  //   formKey={form.keyName}
                  //   formKeyActive={formKeys[formActive].keyName}
                  // />
                );
              default:
                return (
                  <TextInputForm
                    key={key}
                    autoFocus
                    formKey={form.keyName}
                    formKeyActive={formKeys[formActive].keyName}
                    label={form.label}
                  />
                );
            }
          })}
        </FormArea>
      </ContentScreen>
      <BottomControl back={backFormActive} next={nextFormActive} />
    </ContainerScreen>
  );
}
