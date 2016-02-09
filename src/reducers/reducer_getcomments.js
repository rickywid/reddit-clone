import { GET_COMMENTS } from '../actions/index';

export default function ReducerGetComments(state=[], action){
	//console.log(action.payload)
	switch(action.type){
		case GET_COMMENTS:
			return 	[action.payload.data];		
	}

	return state;
}