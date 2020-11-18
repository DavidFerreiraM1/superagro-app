import {HttpReponseData} from '../http-client/response-data';
import {IAnimal} from '../core/interfaces';
import {httpClient} from '../http-client/http-client';
import {dateFormat} from '../core/data-format';

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

export async function createAnimal(
  data: IAnimal,
): Promise<HttpReponseData<IAnimal | null>> {
  const values: IAnimal = {
    ...data,
    dataNascimento: dateFormat(data.dataNascimento),
    entradaPlantel: dateFormat(data.entradaPlantel),
  };

  try {
    const result = await httpClient.post('/', {...values});
    return new HttpReponseData(
      result.data.success,
      result.data.data,
      result.data.error,
    );
  } catch (err) {
    return new HttpReponseData(false, null, err);
  }
}

export async function updateAnimal(
  id: string,
  data: IAnimal,
): Promise<HttpReponseData<IAnimal | null>> {
  try {
    const result = await httpClient.put(`/${id}`, {...data});
    return new HttpReponseData(
      result.data.success,
      result.data.data,
      result.data.error,
    );
  } catch (err) {
    return new HttpReponseData(false, null, err);
  }
}

export async function removeAnimal(id: string): Promise<HttpReponseData<null>> {
  try {
    const result = await httpClient.delete(`/${id}`);
    return new HttpReponseData(
      result.data.success,
      result.data.data,
      result.data.error,
    );
  } catch (err) {
    return new HttpReponseData(false, null, err);
  }
}
