import {RealConnection} from '../../realm/realm-connection';

export async function checkEmailAndPassword(
  email: string,
  password: string,
): Promise<boolean> {
  const getCpfAndPasword = async (): Promise<boolean> => {
    const realm = await RealConnection();
    const user: any = realm.objects('User').filtered('email == $0', email)[0];
    if (user !== undefined) {
      return user.password === password;
    }
    return false;
  };
  const result = await getCpfAndPasword();
  return result;
}
