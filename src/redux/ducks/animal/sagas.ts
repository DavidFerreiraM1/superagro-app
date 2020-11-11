/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {RealConnection} from '../../../realm/realm-connection';
import {idGenerator} from '../../../utils';
import {updateAnimalList} from './action';

export function* updateAnimalListState({payload: data}: any) {
  // salva dados no realm e retorna a listagem completa
  const realm = yield RealConnection();
  realm.write(() => {
    realm.create('AnimalItem', {
      id: idGenerator(),
      ...data,
    });
  });

  const result = realm.objects('AnimalItem');
  yield put(updateAnimalList(result));
}
