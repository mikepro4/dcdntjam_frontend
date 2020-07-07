import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabSearchActive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                 <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#FFF" fillRule="nonzero" transform="translate(-225 -681)">
          <g transform="translate(225.5 681)">
            <path d="M9.5 0A9.5 9.5 0 0119 9.5a9.462 9.462 0 01-2.245 6.134l6.306 6.305a1.5 1.5 0 01-2.008 2.225l-.114-.103-6.465-6.466A9.5 9.5 0 119.5 0zm0 3a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"></path>
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

export default connect(mapStateToProps, {})(TabSearchActive);
