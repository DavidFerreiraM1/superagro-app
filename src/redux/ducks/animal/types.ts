/* eslint-disable no-shadow */
import {IAnimal} from '../../../core/interfaces';

/**
 * Action type
 */
export enum AnimalListType {
  UPDATE_LIST_REQUEST = '@animal/UPDATE_LIST_REQUEST',
  UPDATE_LIST_REQUEST_FAILED = '@animal/UPDATE_LIST_REQUEST_FAILED',
  UPDATE_LIST = '@animal/UPDATE_LIST',
  UPDATE_VALUE = '@animal/UPDATE_VALUE',
  INSERT_REALM_ON_STATE = '@animal/INSERT_REALM_ON_STATE',
}

export interface AnimalListState {
  readonly list: IAnimal[];
  readonly loading: boolean;
  readonly success: boolean;
}
