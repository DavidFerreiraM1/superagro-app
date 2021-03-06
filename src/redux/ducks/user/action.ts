/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {action} from 'typesafe-actions';
import {IUser, IFarm} from '../../../core/interfaces';

import {UserLoggedType, UserLoggedState} from './types';

export const setUserlogRequest = (data: IUser & IFarm): any => {
  return action(UserLoggedType.SET_USERLOGGED_REQUEST, {data});
};

export const autoUpdateState = (): any => {
  return action(UserLoggedType.AUTO_UPDATE_STATE);
};

export const updateUserLogged = (data: UserLoggedState): any => {
  return action(UserLoggedType.SET_USERLOGGED, {data});
};
