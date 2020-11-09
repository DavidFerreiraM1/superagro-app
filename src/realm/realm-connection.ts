import Realm from 'realm';
import {AnimalItem} from './models';

export async function RealConnection(): Promise<Realm> {
  return Realm.open({schema: [AnimalItem]});
}
