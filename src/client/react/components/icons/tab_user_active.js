import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabUserActive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="26"
      viewBox="0 0 23 26"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#FFF" transform="translate(-288 -744)">
          <path d="M291.798 762.147a10.945 10.945 0 0111.987-2.4c4.11 1.713 6.79 5.751 6.79 10.23h-22a11.04 11.04 0 013.223-7.83zm7.778-17.647a5.678 5.678 0 010 11.357 5.685 5.685 0 01-5.679-5.679 5.678 5.678 0 015.679-5.678z"></path>
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

export default connect(mapStateToProps, {})(TabUserActive);
