export interface IAnimal {
  id?: string;
  tipoAnimal: string;
  nome: string;
  localizacao: string;
  dataNascimento: string;
  entradaPlantel: string;
  pesoCompra: string;
  raca: string;
  codigoRastreamento: string;
  faseProducao: string;
  tipoGranja: string;
  statusAnimal: string;
}

export interface IUser {
  id?: string;
  userName: string;
  cpf: string;
  password: string;
  isLogged: boolean;
}

export interface IFarm {
  id?: string;
  name: string;
  cnpj: string;
  ownerId: string; // usuário
  active: boolean;
}
