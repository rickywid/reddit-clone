import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchTopics } from '../actions/index';

class ThreadsList extends Component {

	componentWillMount(){
		this.props.fetchTopics();
	}

	renderList(topics){

		const topic = topics.map(topic=>{

			const title = topic.data.title;
			const permalink = topic.data.permalink;

			return <li><Link to={permalink}>{title}</Link></li>
		})

		return topic;
	}

	render() {
		return (
			<div>
				<ul>
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