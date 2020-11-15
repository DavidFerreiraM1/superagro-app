/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {IAnimal} from '../../../core/interfaces';
import {RealConnection} from '../../../realm/realm-connection';
import {getAnimalList} from '../../../services/animal-service';
import {idGenerator} from '../../../utils';
import {updateAnimalList, insertRealmDataRequestFailed} from './action';

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

export function* changeAnimalValue({payload: param}: any) {
  const realm = yield RealConnection();

  let animal: any = {};

  animal = realm.objects('AnimalItem').filtered('id == $0', param.id)[0];
  realm.write(() => {
    animal[param.animalKey] = param.value;
  });

  yield put(updateAnimalList(realm.objects('AnimalItem')));
}

export function* insertRealmDataOnState() {
  const realm = yield RealConnection();
  const result = yield getAnimalList();

  if (result.success) {
    result.data?.map((animal: IAnimal): void => {
      realm.write(() => {
        realm.create('AnimalItem', {
          ...animal,
          id: `${animal.id}`,
        });
      });
    });
    yield put(updateAnimalList(realm.objects('AnimalItem')));
  } else {
    yield put(insertRealmDataRequestFailed());
  }
}
