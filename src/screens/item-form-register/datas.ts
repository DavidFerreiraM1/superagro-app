export const farmType = {
  poultry: [
    {initials: 'URE', description: 'Recria'},
    {initials: 'UCC', description: 'Ciclo Completo'},
    {initials: 'UPM', description: 'Matrizes'},
    {initials: 'UIN', description: 'Incubatório'},
    {initials: 'UPO', description: 'Produção'},
    {initials: 'UEN', description: 'Engorda'},
  ],
  swine: [
    {initials: 'UCC', description: 'Ciclo Completo'},
    {initials: 'UPL', description: 'Produtora de Leitões'},
    {initials: 'UPD', description: 'Produtora de desmamados'},
    {initials: 'UTE', description: 'Terminador'},
    {initials: 'UCR', description: 'Crechário'},
  ],
};

export const productionPhase = {
  swine: [
    {
      initials: 'MAT',
      description:
        'Fase onde as fêmeas gestantes vão parir e amamentar leitões.',
    },
    {
      initials: 'CRE',
      description: 'Fase onde leitões desmamados são alimentados até 23 Kg',
    },
    {
      initials: 'TER',
      description:
        'Fase onde leitões descrechados são alimentados até o final (abate)',
    },
    {
      initials: 'GESG',
      description:
        'Fase onde temos fêmeas (leitoas e matrizes) e machos (ou sêmen) onde o foco principal é cobertura e cuidar da gestação das matrizes.',
    },
  ],
  poultry: [
    {
      initials: 'ENG',
      description: 'Fase onde os pintinhos são alimentados até o final (abate)',
    },
    {
      initials: 'REC',
      description:
        'Fase onde pintinhos são criados até virarem frangas ou frango, criados em galpões separados (+-1 dia até 23/24 semanas)',
    },
    {
      initials: 'INC',
      description:
        'Fase onde os ovos férteis são incubados e eclodidos: produção de pintos de 1 dia',
    },
    {
      initials: 'PRO',
      description:
        'Fase de produção de ovos férteis -  galinhas e galos em um mesmo galpão (+- relação de 1:10)',
    },
  ],
};

export const formKeys = [
  'tipoAnimal',
  'statusAnimal',
  'nome',
  'localizacao',
  'dataNascimento',
  'entradaPlantel',
  'pesoCompra',
  'raca',
  'codigoRastreamento',
  'faseProducao',
];
