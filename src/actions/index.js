import axios from 'axios';

export const GET_TOPICS = 'GET_TOPICS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const URL = "http://www.reddit.com/r/webdev.json";

export function fetchTopics(){
	
	const request = axios.get(URL);
	console.log(request)

	return {
		type: GET_TOPICS,
		payload: request
	}
}

export function getComments(){
	const request = axios.get("https://www.reddit.com/r/webdev/comments/43s1k2/google_web_shell.json");
	console.log('called');

	return {
		type: GET_COMMENTS,
		payload: request
	}
}
