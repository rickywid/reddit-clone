import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getComments } from '../actions/index';

class Comment extends Component {

	componentDidMount(){
		console.log("======================comments called======================")
		const url = `http://www.reddit.com/r/${this.props.params.subreddit}/comments/${this.props.params.id}/${this.props.params.title}.json`;
		this.props.getComments(url);
	}

	renderComments(data){

		const post = data[0].data.children.map(post=>{
			
			const author = post.data.author;
			const time = moment(post.data.created_utc * 1000).fromNow();
			const title = post.data.title;
			const body = post.data.selftext;
			const url = post.data.url;
			const thumbnail = post.data.thumbnail;

			return (
				<ul className="list-group">
					<li key={title} className="list-group-item thread-post">
						<img className="thumbnail" src={(thumbnail === "self" || thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "" ? "http://www.spotrac.com/assets/images/thumb/bluejays.png" : thumbnail )} className="thumb" />
						<h1><Link to={url}>{title}</Link></h1>
						{body ? <p className="root-comment">{body}</p> : null}
						<p className="details"> Submitted {time} by <span className="user">{author}</span></p>
					</li>
				</ul>
			)
		});
		
		const comment = data[1].data.children.map(comment=>{

			const author = comment.data.author;
			const time = moment(comment.data.created_utc * 1000).fromNow();
			const reply = comment.data.body;

			return (
				<ul className="list-group">
					<li className="list-group-item top-comment">
						<div className="root-comment">
							<p>{reply}</p>
							<p className="details"> Submitted {time} by <span className="user">{author}</span></p>
						</div>

						<ul className="list-group">{comment.data.replies ? comment.data.replies.data.children.map(replies=>{
							return (
								<li className="list-group-item nested-comment">
									<p>{replies.data.body}</p>
									<p className="details"> Submitted {time} by <span className="user">{author}</span></p>
								</li>
								)}) 
							: "" }
						</ul>					
					</li>
				</ul>
			)
		});

		return (
			<div>
				<div>
					{post}
				</div>
				<div>
					{comment}
				</div>
			</div>
		)
	}

	render(){
		
		return(
			<div>
				<Link to ="/reddit-clone">Home</Link>
				{console.log("comments")}
				{this.props.comments.map(this.renderComments)}
				
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getComments }, dispatch);
}

function mapStateToProps(state){
	return({ comments: state.getComments })
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)