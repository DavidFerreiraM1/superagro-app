import {action} from 'typesafe-actions';
import {IAnimal} from '../../../core/interfaces';

import {AnimalListType} from './types';

export const updateAnimalList = (data: IAnimal[]): any =>
  action(AnimalListType.UPDATE_LIST, data);
