import {RealConnection} from '../../realm/realm-connection';

export async function checkEmailAndPassword(
  email: string,
  password: string,
  dispatchActions: () => void,
): Promise<boolean> {
  const getCpfAndPasword = async (): Promise<boolean> => {
    const realm = await RealConnection();
    const user: any = realm.objects('User').filtered('email == $0', email)[0];

    if (user !== undefined) {
      realm.write(() => {
        user.isLogged = true;
      });
      dispatchActions();
      return user.password === password;
    }
    return false;
  };
  const result = await getCpfAndPasword();
  return result;
}

export async function checkUserActive(action: () => void): Promise<void> {
  const realm = await RealConnection();

  const user: any = realm.objects('User').filtered('isLogged == $0', true)[0];
  if (user !== undefined) {
    action();
  }
}
