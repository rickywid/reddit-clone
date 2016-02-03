import axios from 'axios';

export const GET_TOPICS = 'GET_TOPICS';
export const GET_SUBREDDIT = 'GET_SUBREDDIT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const URL = "http://www.reddit.com/r/webdev.json";


export function searchSubReddit(subreddit){
	const request = axios.get(`http://www.reddit.com/r/${subreddit}.json`)
	
	return {
		type: GET_SUBREDDIT,
		payload: request
	}
}

export function fetchTopics(){
	
	//get initial topics for front page
	const request = axios.get(URL);

	return {
		type: GET_TOPICS,
		payload: request
	}
}

export function getComments(url){
	const request = axios.get(url);
	//console.log('called');

	return {
		type: GET_COMMENTS,
		payload: request
	}
}
