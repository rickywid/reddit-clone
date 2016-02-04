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
		window.location.href= `/r/${this.state.subreddit}`;
		this.setState({ subreddit: ''})
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">

						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link className="navbar-brand" to="/">Brand</Link>
							<ul className="nav navbar-nav">
								<li className="active"><Link to="/r/funny">Funny <span className="sr-only">(current)</span></Link></li>
								<li><Link to="/r/WebDesign">Web Design</Link></li>
								<li><Link to="/r/CrappyDesign">Crappy Design</Link></li>
								<li><Link to="/r/webdev">Web Dev</Link></li>
								<li><Link to="/r/javascript">Javascript</Link></li>
								<li><Link to="/r/reactjs">ReactJS</Link></li>
							</ul>
						</div>


						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul className="nav navbar-nav navbar-right">
								<form className="navbar-form navbar-left" role="search" value={this.state.subreddit} onChange={ this.onHandleChange } onSubmit={this.onHandleSubmit} action="subreddit.js">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Search" />
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