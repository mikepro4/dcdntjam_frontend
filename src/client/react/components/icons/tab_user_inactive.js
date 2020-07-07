import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabUserInactive extends Component {
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
        <g fill="#FFF" fillRule="nonzero" transform="translate(-318 -744)">
          <path d="M329.55 758.903l.306.003a10.92 10.92 0 013.93.84c4.016 1.675 6.667 5.57 6.786 9.927l.004.305h-22a11.041 11.041 0 013.222-7.831 10.961 10.961 0 017.446-3.239l.306-.005zm-7.044 3.95a10.032 10.032 0 00-2.846 5.797l-.038.327h19.903l-.019-.185a10.07 10.07 0 00-5.828-8.002l-.278-.12a9.946 9.946 0 00-10.894 2.183zm7.07-18.353a5.678 5.678 0 01.218 11.352l-.218.005a5.685 5.685 0 01-5.679-5.679 5.678 5.678 0 015.46-5.674l.219-.004zm0 1a4.678 4.678 0 100 9.356 4.678 4.678 0 000-9.356z"></path>
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

export default connect(mapStateToProps, {})(TabUserInactive);
