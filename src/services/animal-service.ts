import {HttpReponseData} from '../http-client/response-data';
import {IAnimal} from '../core/interfaces';
import {httpClient} from '../http-client/http-client';

export async function getAnimalList(): Promise<
  HttpReponseData<IAnimal[] | null>
> {
  try {
    const result = await httpClient.get('/');
    return new HttpReponseData(
      result.data.success,
      result.data.data,
      result.data.error,
    );
  } catch (err) {
    return new HttpReponseData(false, null, err);
  }
}
