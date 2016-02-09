import React from 'react';
import { Component } from 'react';

import { Link } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopTopics from './toptopics.js';
import { searchSubReddit } from '../actions/index';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { subreddit: ''}

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleChange(e){
		this.setState({ subreddit: e.target.value });
	}
	onHandleSubmit(e){
		
		e.preventDefault();
		this.props.searchSubReddit(this.state.subreddit)
		window.location.href= `/reddit-clone/r/${this.state.subreddit}`;
		this.setState({ subreddit: ''})
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">

						<div className="navbar-header">
							<Link className="navbar-brand" to="/reddit-clone">Reddit-Clone</Link>
							<ul className="nav navbar-nav">
								<li><Link to="/reddit-clone/r/funny">Funny</Link></li>
								<li><Link to="/reddit-clone/r/WebDesign">Web Design</Link></li>
								<li><Link to="/reddit-clone/r/CrappyDesign">Crappy Design</Link></li>
								<li><Link to="/reddit-clone/r/webdev">Web Dev</Link></li>
								<li><Link to="/reddit-clone/r/javascript">Javascript</Link></li>
								<li><Link to="/reddit-clone/r/reactjs">ReactJS</Link></li>
							</ul>
						</div>


						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul className="nav navbar-nav navbar-right">
								<form className="navbar-form navbar-left" role="search" value={this.state.subreddit} onChange={ this.onHandleChange } onSubmit={this.onHandleSubmit} action="subreddit.js">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="subreddit..." />
									</div>
									<button type="submit" className="btn btn-default">Submit</button>
								</form>
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ searchSubReddit }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);