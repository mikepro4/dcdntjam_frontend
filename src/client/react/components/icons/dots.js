import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Dots extends Component {
	render() {
		return (
			<div className="svg-wrapper">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="4"
      viewBox="0 0 22 4"
    >
     
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-331 -66)">
          <g fill="#FFF" transform="translate(331 66)">
            <path d="M2.5 0a2 2 0 110 4 2 2 0 010-4zm8.25 0a2 2 0 110 4 2 2 0 010-4zm8.667 0a2 2 0 110 4 2 2 0 010-4z"></path>
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

export default connect(mapStateToProps, {})(Dots);
