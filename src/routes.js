import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TopTopics from './components/toptopics';
import Comments from './components/comments';

export default(
	<Route path="/" component={App} >
		<IndexRoute component={TopTopics} />
		<Route path="/r/:subreddit/comments/:id/:title/" component={Comments} />
	</Route>
	)