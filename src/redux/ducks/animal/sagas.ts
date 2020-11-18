/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {put} from 'redux-saga/effects';
import {formateDateOnView} from '../../../core/format-data-on-view';
import {IAnimal} from '../../../core/interfaces';
import {RealConnection} from '../../../realm/realm-connection';
import {getAnimalList} from '../../../services/animal-service';
// import {idGenerator} from '../../../utils';
import {updateAnimalList, insertRealmDataRequestFailed} from './action';

export function* updateAnimalListState({payload: dataResponse}: any) {
  // salva dados no realm e retorna a listagem completa
  const realm = yield RealConnection();
  realm.write(() => {
    realm.create('AnimalItem', {
      ...dataResponse,
      id: `${dataResponse.id}`,
      dataNascimento: formateDateOnView(dataResponse.dataNascimento),
      entradaPlantel: formateDateOnView(dataResponse.entradaPlantel),
    });
  });

  const result = realm.objects('AnimalItem');
  yield put(updateAnimalList(result));
}

export function* changeAnimalValue({payload: param}: any) {
  const realm = yield RealConnection();
  yield put(updateAnimalList(realm.objects('AnimalItem')));
}

export function* insertRealmDataOnState() {
  const realm = yield RealConnection();
  const result = yield getAnimalList();

  const allAnimals = realm.objects('AnimalItem');

  if (result.success) {
    realm.write(() => {
      realm.delete(allAnimals); // remove todos os registros
    });

    result.data?.map((animal: IAnimal): void => {
      realm.write(() => {
        realm.create('AnimalItem', {
          ...animal,
          id: `${animal.id}`,
          dataNascimento: formateDateOnView(animal.dataNascimento),
          entradaPlantel: formateDateOnView(animal.entradaPlantel),
        });
      });
    });
    yield put(updateAnimalList(allAnimals));
  } else {
    yield put(insertRealmDataRequestFailed(allAnimals));
  }
}
