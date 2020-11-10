/* eslint-disable no-shadow */
import {IAnimal} from '../../../core/interfaces';

/**
 * Action type
 */
export enum AnimalListType {
  UPDATE_LIST = '@animal/UPDATE_LIST',
}

export interface AnimalListState {
  readonly list: IAnimal[];
}
