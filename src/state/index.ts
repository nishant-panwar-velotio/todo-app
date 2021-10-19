import { combineReducers } from 'redux';

import common from './common/reducer';
import demo from './demo/reducer';
import todo from './todo/reducer';

export default combineReducers({
  common,
  demo,
  todo
});
