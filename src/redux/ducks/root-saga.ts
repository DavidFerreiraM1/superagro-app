/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, takeLatest} from 'redux-saga/effects';

import {AnimalListType} from './animal/types';
import {updateAnimalListState} from './animal/sagas';

export default function* rootSagas() {
  return yield all([
    takeLatest(AnimalListType.UPDATE_LIST_REQUEST, updateAnimalListState),
  ]);
}
