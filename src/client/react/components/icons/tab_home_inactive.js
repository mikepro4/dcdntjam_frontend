import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class HomeInactive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-13 -681)">
          <path fill="#000" d="M0 658H375V730H0z"></path>
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M25.038 681.155a.773.773 0 01.826-.065l.098.065 11.742 9.09a.773.773 0 01.29.505l.006.099V706c0 .364-.303.697-.66.75l-.098.008h-7.954c-.364 0-.697-.304-.75-.66L28.53 706v-5.303a3.007 3.007 0 00-3.03-3.03 3.005 3.005 0 00-3.025 2.85l-.005.18V706c0 .364-.304.697-.66.75l-.098.008h-7.954c-.364 0-.698-.304-.75-.66L13 706v-15.151c0-.2.082-.396.222-.538l.074-.066 11.742-9.09zm.462.906L14 690.964v14.793h7.469v-5.06a4.005 4.005 0 013.828-4.025l.203-.005a4.005 4.005 0 014.025 3.827l.005.203v5.06H37v-14.792l-11.5-8.904z"
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

export default connect(mapStateToProps, {})(HomeInactive);
