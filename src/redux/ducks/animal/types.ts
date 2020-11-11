/* eslint-disable no-shadow */
import {IAnimal} from '../../../core/interfaces';

/**
 * Action type
 */
export enum AnimalListType {
  UPDATE_LIST_REQUEST = '@animal/UPDATE_LIST_REQUEST',
  UPDATE_LIST = '@animal/UPDATE_LIST',
  UPDATE_VALUE = '@animal/UPDATE_VALUE',
}

export interface AnimalListState {
  readonly list: IAnimal[];
}
