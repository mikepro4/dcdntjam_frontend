import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

class RightSlider extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {

    }



	render() {

		return (
			<div className="right-slider">
                {this.props.children}
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        rightSlider: state.app.rightSlider,
        bottomSlider: state.app.bottomSlider,
	};
}

export default connect(mapStateToProps, {
})(withRouter(RightSlider));
