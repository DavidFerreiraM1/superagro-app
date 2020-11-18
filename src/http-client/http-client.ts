import Axios from 'axios';
import {URL} from '../../env';

export const httpClient = Axios.create({
  baseURL: URL,
});
