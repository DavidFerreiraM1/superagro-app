import {Reducer} from 'redux';
import {UserLoggedState, UserLoggedType} from './types';

const INITIAL_STATE: UserLoggedState = {
  id: '',
  username: '',
  farmId: '',
  farmName: '',
};
const reducer: Reducer<UserLoggedState> = (
  state = INITIAL_STATE,
  action,
): UserLoggedState => {
  switch (action.type) {
    case UserLoggedType.SET_USERLOGGED:
      return {...state, ...action.payload.data};
    default:
      return state;
  }
};

export default reducer;
