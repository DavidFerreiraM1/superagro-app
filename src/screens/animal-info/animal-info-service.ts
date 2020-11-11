import {RealConnection} from '../../realm/realm-connection';

export async function getAnimalOnRealm(id?: string): Promise<any> {
  const realm = await RealConnection();
  return realm.objects('AnimalItem').filtered('id == $0', id)[0];
}
