/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {action} from 'typesafe-actions';
import {IAnimal} from '../../../core/interfaces';

import {AnimalListType} from './types';

export const updateAnimalList = (data: IAnimal[]): any => {
  return action(AnimalListType.UPDATE_LIST, {data});
};

export const changeAnimalValue = (data: any): any => {
  return action(AnimalListType.UPDATE_VALUE, data);
};

export const updateAnimalRequest = (data: IAnimal): any => {
  return action(AnimalListType.UPDATE_LIST_REQUEST, data);
};

export const insertRealmDataOnState = (): any => {
  return action(AnimalListType.INSERT_REALM_ON_STATE);
};
