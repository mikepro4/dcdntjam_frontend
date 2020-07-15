import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Filter extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#FFF" fillRule="nonzero" transform="translate(-228 -205)">
                    <path d="M240.999 205.495h-12a1.003 1.003 0 00-.709 1.71l4.71 4.71v6.589a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71v-4.59l4.709-4.71a1.003 1.003 0 00-.71-1.71z"></path>
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

export default connect(mapStateToProps, {})(Filter);
