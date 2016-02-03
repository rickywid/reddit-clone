import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getComments } from '../actions/index';

class Comment extends Component {

	componentWillMount(){
		const url = `http://www.reddit.com/r/${this.props.params.subreddit}/comments/${this.props.params.id}/${this.props.params.title}.json`;
		this.props.getComments(url);
	}

	renderComments(data){
		
		const comment = data.map(comment=>{

			return (
				<ul className="list-group">
					<li className="list-group-item">{comment.data.body}</li>
					<ul className="list-group">{comment.data.replies ? comment.data.replies.data.children.map(replies=>{
						return (<li className="list-group-item">{replies.data.body}</li>)}) 
						: null}
					</ul>
				</ul>
			)
		});

		return <div>{comment}</div>;
	}

	render(){
		return(
			<div>
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