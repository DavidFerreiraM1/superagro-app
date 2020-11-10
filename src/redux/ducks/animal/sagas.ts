/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {IAnimal} from '../../../core/interfaces';
import {updateAnimalList} from './action';

export function* updateAnimalListState(lista: IAnimal[]) {
  return yield put(updateAnimalList(lista));
}
