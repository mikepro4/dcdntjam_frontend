import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

import Header from "./react/components/header"
import BottomNav from "./react/components/bottom_nav"

import {
	scrollingUp,
	scrollingDown,
	fetchCurrentUser,
} from "./redux/actions/appActions";

class App extends Component {

	static loadData(store, match) {
		return store.dispatch(fetchCurrentUser());
	}

	state = {
	};

	componentDidMount() {
		this.props.fetchCurrentUser();
		this.prev = window.scrollY;
		window.addEventListener('scroll', e => this.handleNavigation(e));
		
	}
	
	handleNavigation = (e) => {
		const window = e.currentTarget;
		if(window.scrollY <= 0) {
			this.props.scrollingUp()
		} else {
			if (this.prev > window.scrollY) {
				this.props.scrollingUp()
			} else if (this.prev < window.scrollY) {
				this.props.scrollingDown()
			}
		}
	
		this.prev = window.scrollY;
	};

	render() {
		return (
			<div className="app">
				<Header/>
				{renderRoutes(this.props.route.routes)}
				<BottomNav/>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		app: state.app
	};
}

export default {
	component: connect(mapStateToProps, { 
		fetchCurrentUser,
		scrollingUp,
		scrollingDown
	})(App)
};
