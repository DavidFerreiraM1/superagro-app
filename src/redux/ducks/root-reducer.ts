import {combineReducers} from 'redux';

import animalList from './animal';
import userlogged from './user';

export default combineReducers({
  animalList,
  userlogged,
});
