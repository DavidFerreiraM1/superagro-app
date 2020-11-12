import {createStore, Store, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {AnimalListState} from './ducks/animal/types';

import rootReducer from './ducks/root-reducer';
import rootSagas from './ducks/root-saga';

export interface AppState {
  animalList: AnimalListState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
