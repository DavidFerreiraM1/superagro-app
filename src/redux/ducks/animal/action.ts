import {action} from 'typesafe-actions';
import {IAnimal} from '../../../core/interfaces';

import {AnimalListType} from './types';

export const updateAnimalList = (data: IAnimal[]): any => {
  return action(AnimalListType.UPDATE_LIST, {data});
};

export const updateAnimalRequest = (data: IAnimal): any => {
  return action(AnimalListType.UPDATE_LIST_REQUEST, data);
};
