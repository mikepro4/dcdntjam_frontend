import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

import Header from "./react/components/header"

import {
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
	}

	render() {
		return (
			<div className="app">
				<Header/>
				{renderRoutes(this.props.route.routes)}
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
		fetchCurrentUser 
	})(App)
};
