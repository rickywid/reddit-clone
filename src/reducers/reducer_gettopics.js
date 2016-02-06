import { GET_TOPICS } from '../actions/index';
import { GET_COMMENTS } from '../actions/index';
import { GET_SUBREDDIT } from '../actions/index';

export default function ReducerGetTopics(state=[], action){
	//console.log(action.payload)
	switch(action.type){
		case GET_TOPICS:
			return [action.payload.data.data.children, ...state];

		case GET_COMMENTS:
			return 	action.payload.data;		

		case GET_SUBREDDIT:
			return [ action.payload.data.data.children ];
	}

	return state;
}