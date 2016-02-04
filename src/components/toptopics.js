import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchTopics } from '../actions/index';

class ThreadsList extends Component {

	constructor(props){
		super(props);

		this.state = { permalink: ''};
		this.renderList = this.renderList.bind(this)
	}

	componentWillMount(){
		this.props.fetchTopics();
	}

	renderList(topics){

		const topic = topics.map(topic=>{

			const title = topic.data.title;
			const permalink = topic.data.permalink;
			const author = topic.data.author;
			const num_comments = topic.data.num_comments;
			const thumbnail = topic.data.thumbnail;
			const time = moment(topic.data.created_utc * 1000).fromNow();

			return (
				<li className="list-group-item">
					<img src={thumbnail} className="thumb" /><h4><Link to={permalink}>{title}</Link></h4>
					<p className="details">Submmitted by <span className="user">{author}</span> {time} ago <span className="comments"><Link to={permalink}>{num_comments} comments</Link></span></p>
				</li>
			)
		})

		return topic;
	}

	render() {
		return (
				<ul className="list-group">
					{this.props.data.map(this.renderList)}
				</ul>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchTopics }, dispatch);
}

function mapStateToProps(state){
	return({ data: state.getTopics })
}
export default connect(mapStateToProps, mapDispatchToProps)(ThreadsList);