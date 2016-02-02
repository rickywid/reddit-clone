import { combineReducers } from 'redux';
import ReducerGetTopics from './reducer_gettopics';

const rootReducer = combineReducers({
  getTopics: ReducerGetTopics,
  getComments: ReducerGetTopics
});

export default rootReducer;