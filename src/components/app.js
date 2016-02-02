import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router'
import TopTopics from './toptopics.js';


export default class App extends Component {

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
								<li className="active"><a href="#">Top <span className="sr-only">(current)</span></a></li>
								<li><a href="#">Web Design</a></li>
								<li><a href="#">Crappy Design</a></li>
								<li><a href="#">Web Dev</a></li>
								<li><a href="#">Javascript</a></li>
								<li><a href="#">ReactJS</a></li>
							</ul>
						</div>


						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Link</a></li>
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

