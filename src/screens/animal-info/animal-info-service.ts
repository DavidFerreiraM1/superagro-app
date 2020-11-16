/* eslint-disable prefer-destructuring */
import {RealConnection} from '../../realm/realm-connection';
import {updateAnimal} from '../../services/animal-service';

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
  let animal: any = realm.objects('AnimalItem').filtered('id == $0', id)[0];

  const {success} = await updateAnimal(id, animal);

  if (success) {
    realm.write(() => {
      animal[key] = value;
    });
  }

  return realm.objects('AnimalItem');
}
