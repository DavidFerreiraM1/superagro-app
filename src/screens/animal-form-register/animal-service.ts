/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {RealConnection} from '../../realm/realm-connection';

export async function createAnimalIntoRealm(animalItem: any): Promise<any> {
  const realm = await RealConnection();
  realm.write(() => {
    realm.create('AnimalItem', animalItem);
  });
  const result = realm.objects('AnimalItem');
  return result;
}
