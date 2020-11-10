/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, takeLatest} from 'redux-saga/effects';

import {AnimalListType} from './animal/types';
import {updateAnimalListState} from './animal/sagas';

const {UPDATE_LIST}: any = AnimalListType;

export default function* rootSagas() {
  return yield all([takeLatest(UPDATE_LIST, updateAnimalListState)]);
}
