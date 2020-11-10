/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {createAnimalIntoRealm} from '../../../screens/animal-form-register/animal-service';
// import {IAnimal} from '../../../core/interfaces';
import {updateAnimalList} from './action';

export function* updateAnimalListState({payload: data}: any) {
  // buscar dados do realm
  const result = yield createAnimalIntoRealm(data);
  yield put(updateAnimalList(result));
}
