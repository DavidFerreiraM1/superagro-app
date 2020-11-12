/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {RealConnection} from '../../../realm/realm-connection';
import {idGenerator} from '../../../utils';
import {updateAnimalList} from './action';

export function* setUserLoggedState({payload: value}: any) {
  const data = value.data;
  const realm = yield RealConnection();
  const userId = idGenerator();
  const farmId = idGenerator();

  const userActive = realm.objects('User').filtered('isLogged == $0', true)[0];

  if (userActive !== undefined) {
    realm.write(() => {
      userActive.isLogged = false;
    });
    const farmActive = realm
      .objects('Farm')
      .filtered('ownerId == $0', userActive.id)[0];
    realm.write(() => {
      farmActive.active = false;
    });
  }

  realm.write(() => {
    realm.create('User', {
      id: userId,
      username: data.username,
      cpf: data.cpf,
      password: data.password,
      isLogged: true,
    });

    realm.create('Farm', {
      id: farmId,
      name: data.farmName,
      cnpj: data.cnpj,
      ownerId: userId,
      active: true,
    });
  });

  yield put(
    updateAnimalList({
      id: userId,
      username: data.username,
      farmId,
      farmName: data.farmName,
    }),
  );
}
