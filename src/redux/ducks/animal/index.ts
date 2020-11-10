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
      return {...state, list: action.payload};
    default:
      return state;
  }
};

export default reducer;
