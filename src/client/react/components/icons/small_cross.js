import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class SmallCross extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#FFF" fillRule="nonzero" transform="translate(-338 -117)">
                    <path d="M350.378 117.663c.154.181.16.452.028.641l-.056.067-5.166 5.128 5.166 5.13a.531.531 0 01.028.708.438.438 0 01-.587.086l-.067-.055-5.224-5.189-5.224 5.19a.438.438 0 01-.654-.032.534.534 0 01-.028-.641l.056-.067 5.165-5.13-5.165-5.128a.531.531 0 01-.028-.708.438.438 0 01.587-.086l.067.055 5.224 5.188 5.224-5.188a.438.438 0 01.654.03z"></path>
                    </g>
                </g>
                </svg>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(SmallCross);
