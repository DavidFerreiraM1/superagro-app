import {RealConnection} from '../../realm/realm-connection';

export async function logout(): Promise<void> {
  const realm = await RealConnection();

  const user: any = realm.objects('User').filtered('isLogged == $0', true)[0];
  const allAnimals: any = realm.objects('AnimalItem');

  realm.write(() => {
    realm.delete(allAnimals);
    user.isLogged = false;
  });
}
