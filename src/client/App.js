import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

import Header from "./react/components/header"
import BottomNav from "./react/components/bottom_nav"
import Slider from "./react/sliders"

import {
	scrollingUp,
	scrollingDown,
	fetchCurrentUser,
	updateChannelId
} from "./redux/actions/appActions";

import {
	profileLoadMyVideos
} from "./redux/actions/pageProfileActions";

import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

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

		if(this.props.app.user) {



			switch (this.props.app.user.status.type) {
				case "initial":
					return (
							this.handleInitialSignIn()
						)
				case "watcher":
					return (
							this.handleWatcher()
						)
				default:
					return;
			}
			
		}
	}

	handleWatcher() {
		console.log("check if has channel")
	}

	handleInitialSignIn() {
		console.log("initial sign in")
		this.props.updateChannelId(
			this.props.app.user.googleId,
			this.props.app.user.accessToken,
			(data) => {
				console.log(data)
			}
		)
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
				<Slider />
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
		scrollingDown,
		updateChannelId,
		profileLoadMyVideos
	})(App)
};
