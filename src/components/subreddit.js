import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSubReddit } from '../actions/index';
import { reRenderTopics } from '../actions/index';

class SubReddit extends Component { 
	constructor(props){
		super(props)
		
		this.state = { visible: false };
		
		this.renderList = this.renderList.bind(this);
		this.showSelfText = this.showSelfText.bind(this);
	}

	componentDidMount(){
		
		this.props.searchSubReddit(this.props.params.subreddit)
	}

	componentWillReceiveProps(nextProps){
		this.props.searchSubReddit(nextProps.params.subreddit)
	}

	showSelfText(){
		this.setState({visible: !this.state.visible});
	}

	renderList(data){
		const topics = data.map(topic=>{

			const title = topic.data.title;
			const permalink = topic.data.permalink;
			const url = topic.data.url;
			const author = topic.data.author;
			const num_comments = topic.data.num_comments;
			const thumbnail = topic.data.thumbnail;
			const time = moment(topic.data.created_utc * 1000).fromNow();
			const domain = topic.data.domain;
			const body = topic.data.selftext;
			//const ups = topic.data.ups;
			
			return (
				<li className="list-group-item">
					<img className="thumb" src={(thumbnail === "self" || thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "" ? "http://www.spotrac.com/assets/images/thumb/bluejays.png" : thumbnail)} />
					<h4>
						<Link target ="_blank" to={( domain === "self.webdev" ? permalink : url )}>{title}</Link>
						<span className="domain">({domain})</span>
					</h4>
					<div className="options">
						{ body ? <span className="glyphicon glyphicon-plus plus" onClick={this.showSelfText}></span> : "" }
						<p className={this.state.visible ? "selftext-show" : "selftext-hide"}>
							{ body ? body : ""}
						</p>
					</div>
					<p className="details">Submmitted {time} by <span className="user">{author}</span> / <span className="comments"><Link to={`/reddit-clone${permalink}`} >{num_comments} comments</Link></span></p>
					
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
	return bindActionCreators({ 
		searchSubReddit: searchSubReddit, 
		reRenderTopics: reRenderTopics 
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubReddit)