import {Reducer} from 'redux';
import {AnimalListState, AnimalListType} from './types';

const INITIAL_STATE: AnimalListState = {
  list: [],
};
const reducer: Reducer<AnimalListState> = (
  state = INITIAL_STATE,
  action,
): AnimalListState => {
  switch (action.type) {
    case AnimalListType.UPDATE_LIST:
      return {list: action.payload.data};
    case AnimalListType.UPDATE_LIST_REQUEST:
      return state;
    default:
      return state;
  }
};

export default reducer;
