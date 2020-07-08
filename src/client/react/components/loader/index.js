import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

class Loader extends Component {
	render() {
		return (
            <div 
                className="loader_wrapper"
            >
                <div className="loader">
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                    <div className="nucleobase"></div>
                </div>

                <div className="loading_label">Submitting jam</div>
            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        scrollingDown: state.app.scrollingDown
	};
}

export default connect(mapStateToProps, {})(withRouter(Loader));
