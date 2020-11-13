import {RealConnection} from '../../realm/realm-connection';

export async function updateInfo(
  idUser: string,
  key: string,
  value: string,
): Promise<void> {
  const realm = await RealConnection();
  const user: any = realm.objects('User').filtered('id == $0', idUser)[0];

  if (key === 'farmname') {
    const farm: any = realm
      .objects('Farm')
      .filtered('ownerId == $0', idUser)[0];
    realm.write(() => {
      farm.name = value;
    });
  }

  realm.write(() => {
    user[key] = value;
  });
}

export async function getUserInfo(): Promise<any> {
  const realm = await RealConnection();

  const user: any = realm.objects('User').filtered('isLogged == $0', true)[0];
  const farm: any = realm.objects('Farm').filtered('ownerId == $0', user.id)[0];
  const result = {
    userId: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    farmName: farm.name,
  };

  return result;
}
