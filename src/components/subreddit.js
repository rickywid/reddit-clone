import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSubReddit } from '../actions/index';

class SubReddit extends Component { 

	componentDidMount(){
		this.props.searchSubReddit(this.props.params.subreddit)
	}

	renderList(data){
		const topics = data.map(topic=>{

			const title = topic.data.title;
			const permalink = topic.data.permalink;
			const author = topic.data.author;
			const num_comments = topic.data.num_comments;
			const thumbnail = topic.data.thumbnail;
			const time = moment(topic.data.created_utc * 1000).fromNow();
			
			return (
				<li className="list-group-item">
					<h5><img src={thumbnail} className="thumb" /><Link to={permalink}>{title}</Link></h5>
					<p>Submmitted by {author} {time} ago <span><Link to={permalink}>{num_comments} comments</Link></span></p>
				</li>
				)
			});

		return topics;
	}

	render(){
		return(
			<ul className="list-group">{this.props.data.map(this.renderList)}</ul>
		)
	}


}

function mapStateToProps(state){
	return({ data: state.getTopics })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ searchSubReddit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubReddit)