/* eslint-disable prefer-destructuring */
import {RealConnection} from '../../realm/realm-connection';

export async function getAnimalOnRealm(id?: string): Promise<any> {
  const realm = await RealConnection();
  const result = realm.objects('AnimalItem').filtered('id == $0', id)[0];
  return result;
}

export async function updateDataOnRealm(
  id: string,
  key: string,
  value: string,
): Promise<any> {
  const realm = await RealConnection();
  let animal: any = {};
  realm.write(() => {
    animal = realm.objects('AnimalItem').filtered('id == $0', id)[0];
    animal[key] = value;
  });
  return realm.objects('AnimalItem');
}
