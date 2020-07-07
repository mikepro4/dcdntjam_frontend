import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TikTok extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="6"
      viewBox="0 0 7 6"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-215 -245)">
          <g fillRule="nonzero" transform="translate(211.5 241)">
            <path
              fill="#FFF"
              d="M9.273 4.874a.5.5 0 01.846.526l-.048.077L6.898 9.67a.5.5 0 01-.709.09l-.067-.064-1.823-2.098a.5.5 0 01.69-.719l.064.063 1.419 1.633 2.801-3.701z"
            ></path>
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

export default connect(mapStateToProps, {})(TikTok);
