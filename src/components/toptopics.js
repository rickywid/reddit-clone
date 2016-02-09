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

		this.state = { visible: false};

		this.renderList = this.renderList.bind(this);
		this.showSelfText = this.showSelfText.bind(this);

	}

	componentWillMount(){
		console.log("======================componentdidmount toptopics======================")
		this.props.fetchTopics();				
	}

	showSelfText(){
		this.setState({visible: !this.state.visible});
	}

	renderList(topics){

		const topic = topics.map(topic=>{

			const title = topic.data.title;
			const permalink = topic.data.permalink;
			const author = topic.data.author;
			const num_comments = topic.data.num_comments;
			const thumbnail = topic.data.thumbnail;
			const time = moment(topic.data.created_utc * 1000).fromNow();
			const domain = topic.data.domain;
			const url = topic.data. url;
			const subreddit = topic.data.subreddit;
			const body = topic.data.selftext;
			console.log(topic.data.body);

			return (
				<li className="list-group-item">
					<img className="thumb" src={(thumbnail === "self" || thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "" ? "http://www.spotrac.com/assets/images/thumb/bluejays.png" : thumbnail )} className="thumb" />
					<h4>
						<Link target ="_blank" to={( domain === `self.${subreddit}` ? permalink : url )}>{title}</Link>
						<span className="domain">({domain})</span>
					</h4>
					<div className="options">
						{ body ? <span className="glyphicon glyphicon-plus plus" onClick={this.showSelfText}></span> : "" }
				
						<p className={this.state.visible ? "selftext-show" : "selftext-hide"}>
							{ body ? body : ""}
						</p>
					</div>
					<p className="details">Submmitted by <span className="user">{author}</span> {time} ago <span className="comments"><Link to={`/reddit-clone${permalink}`}>{num_comments} comments</Link></span></p>
				</li>
			)
		})

		return topic;
	}

	render() {
		return (
				<div>
					<ul className="list-group">
						{console.log("======================root======================")}
						{console.log(this.props.data)}
						{this.props.data.map(this.renderList)}
					</ul>
				</div>
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