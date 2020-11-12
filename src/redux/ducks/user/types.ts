/* eslint-disable no-shadow */

/**
 * Action type
 */
export enum UserLoggedType {
  SET_USERLOGGED_REQUEST = '@userlogged/SET_USERLOGGED_REQUEST',
  SET_USERLOGGED = '@userlogged/SET_USERLOGGED',
}

export interface UserLoggedState {
  readonly id: string;
  readonly username: string;
  readonly farmId: string;
  readonly farmName: string;
}
