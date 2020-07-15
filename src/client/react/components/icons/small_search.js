import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class SmallSearch extends Component {
	render() {
		return (
			<div className="svg-wrapper">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#FFF" fillRule="nonzero" transform="translate(-23 -116)">
            <path d="M29.4 116a6.4 6.4 0 014.546 10.907l4.233 4.232a.504.504 0 01-.644.772l-.07-.059-4.285-4.285A6.4 6.4 0 1129.4 116zm0 1.008a5.392 5.392 0 100 10.784 5.392 5.392 0 000-10.784z"></path>
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

export default connect(mapStateToProps, {})(SmallSearch);
