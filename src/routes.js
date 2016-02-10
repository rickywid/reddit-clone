import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TopTopics from './components/toptopics';
import Comments from './components/comments';
import SubReddit from './components/subreddit';

export default(
	<Route path="/reddit-clone" component={App} >
		<IndexRoute component={TopTopics} />
		<Route path="r/:subreddit" component={SubReddit} />
		<Route path="r/:subreddit/comments/:id/:title" component={Comments} />
	</Route>
)