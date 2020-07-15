import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Filter extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#FFF" fillRule="nonzero" transform="translate(-306 -206)">
                    <path
                        d="M5 11.5c-.28 0-.53.11-.71.29l-.29.3V8.5c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2A1.003 1.003 0 005 11.5zm4 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"
                        transform="translate(306.5 205.5)"
                    ></path>
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
