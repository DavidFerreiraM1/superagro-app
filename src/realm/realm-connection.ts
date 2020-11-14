import Realm from 'realm';
import {AnimalItem, Farm, User} from './models';

export async function RealConnection(): Promise<Realm> {
  return Realm.open({schema: [AnimalItem, Farm, User]});
}
