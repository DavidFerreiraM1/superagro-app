/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, takeLatest} from 'redux-saga/effects';

import {AnimalListType} from './animal/types';
import {
  updateAnimalListState,
  changeAnimalValue,
  insertRealmDataOnState,
} from './animal/sagas';
import {setUserLoggedState, autoUpdateState} from './user/sagas';
import {UserLoggedType} from './user/types';

export default function* rootSagas() {
  return yield all([
    takeLatest(AnimalListType.UPDATE_LIST_REQUEST, updateAnimalListState),
    takeLatest(AnimalListType.UPDATE_VALUE, changeAnimalValue),
    takeLatest(AnimalListType.INSERT_REALM_ON_STATE, insertRealmDataOnState),
    takeLatest(UserLoggedType.SET_USERLOGGED_REQUEST, setUserLoggedState),
    takeLatest(UserLoggedType.AUTO_UPDATE_STATE, autoUpdateState),
  ]);
}
