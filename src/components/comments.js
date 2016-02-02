import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getComments } from '../actions/index';

class Comment extends Component {

	componentWillMount(){
		this.props.getComments();
	}

	renderComments(data){
		const comment = data.map(comment=>{
			return <li>{comment.data.body}</li>
		});

		return comment;
	}

	render(){
		return(
			<ul>
				{this.props.comments.map(this.renderComments)}
			</ul>
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