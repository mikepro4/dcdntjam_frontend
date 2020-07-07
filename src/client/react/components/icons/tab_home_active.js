import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class HomeActive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      viewBox="0 0 26 27"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-39 -681)">
          <path fill="#000" d="M0 658H375V730H0z"></path>
          <path
            fill="#FFF"
            d="M51.538 681.655l-11.742 9.09a.77.77 0 00-.296.604V706.5c0 .397.36.758.758.758h7.954c.397 0 .758-.361.758-.758v-5.303a3.007 3.007 0 013.03-3.03 3.007 3.007 0 013.03 3.03v5.303c0 .397.361.758.758.758h7.954c.397 0 .758-.361.758-.758v-15.151a.773.773 0 00-.296-.604l-11.742-9.09a.767.767 0 00-.924 0z"
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

export default connect(mapStateToProps, {})(HomeActive);
