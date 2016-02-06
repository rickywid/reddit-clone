import { combineReducers } from 'redux';
import ReducerGetTopics from './reducer_gettopics';
import ReducerGetComments from './reducer_getcomments';

const rootReducer = combineReducers({
  getTopics: ReducerGetTopics,
  getComments: ReducerGetComments
});

export default rootReducer;