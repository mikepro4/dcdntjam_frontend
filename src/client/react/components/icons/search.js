import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Search extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#FFF" fillRule="nonzero" transform="translate(-32 -349)">
                    <path d="M39.5 349a7 7 0 015.527 11.297l3.802 3.327a.5.5 0 01-.585.805l-.073-.053-3.814-3.336A7 7 0 1139.5 349zm0 1a6 6 0 100 12 6 6 0 000-12z"></path>
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

export default connect(mapStateToProps, {})(Search);
