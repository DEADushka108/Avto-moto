import {combineReducers} from 'redux';
import {reducer as comments} from './comments/comments';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.COMMENTS]: comments,
});