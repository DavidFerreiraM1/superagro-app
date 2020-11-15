import {Reducer} from 'redux';
import {AnimalListState, AnimalListType} from './types';

const INITIAL_STATE: AnimalListState = {
  list: [],
  loading: true,
  success: true,
};
const reducer: Reducer<AnimalListState> = (
  state = INITIAL_STATE,
  action,
): AnimalListState => {
  switch (action.type) {
    case AnimalListType.UPDATE_LIST_REQUEST:
      return {...state, loading: true};
    case AnimalListType.UPDATE_LIST:
      return {list: action.payload.data, loading: false, success: true};
    case AnimalListType.UPDATE_LIST_REQUEST_FAILED:
      return {list: [], loading: false, success: false};
    default:
      return state;
  }
};

export default reducer;
