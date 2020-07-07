import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class ArrowBack extends Component {
	render() {
		return (
			<div className="svg-wrapper">
       <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="13"
            viewBox="0 0 23 13"
            >
           
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(-18 -63)">
                <g
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(19 63)"
                >
                    <path d="M21.351 6.345L.275 6.335M5.916 0L0 6.286m5.916 6.335L0 6.286"></path>
                </g>
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

export default connect(mapStateToProps, {})(ArrowBack);
