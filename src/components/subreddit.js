import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSubReddit } from '../actions/index';

class SubReddit extends Component { 

	componentWillMount(){
		this.props.searchSubReddit(this.props.params.subreddit)
	}

	renderList(data){
		const topics = data.map(topic=>{
			return <li>{topic.data.title}</li>
			});
		
		return topics;
	}

	render(){
		return(
			<ul>{this.props.data.map(this.renderList)}</ul>
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