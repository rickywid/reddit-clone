import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getComments } from '../actions/index';

class Comment extends Component {

	componentDidMount(){
		const url = `http://www.reddit.com/r/${this.props.params.subreddit}/comments/${this.props.params.id}/${this.props.params.title}.json`;
		this.props.getComments(url);
	}

	renderComments(data){
		
		const comment = data.map(comment=>{

			const author = comment.data.author;
			const time = moment(comment.data.created_utc * 1000).fromNow();

			return (
				<ul className="list-group">
					<li className="list-group-item top-comment">
						<p>{comment.data.body}</p>
						<p className="details"> Submitted {time} by <span className="user">{author}</span></p>
						<ul className="list-group">{comment.data.replies ? comment.data.replies.data.children.map(replies=>{
							return (
								<li className="list-group-item nested-comment">
									<p>{replies.data.body}</p>
									<p className="details"> Submitted {time} by <span className="user">{author}</span></p>
								</li>
								)}) 
							: null}
						</ul>					
					</li>
				</ul>
			)
		});

		return <div>{comment}</div>;
	}

	render(){
		
		return(
			<div>
				{console.log("reducer -> return action.payload.data")}
				{ console.log( this.props.comments[0])}
				
				
				
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