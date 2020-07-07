import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class AddUser extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="50%"
          x2="50%"
          y1="4.515%"
          y2="99.125%"
        >
          <stop offset="0%"></stop>
          <stop offset="100%" stopColor="#2A0D31"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-24 -99)">
          <path
            fill="url(#linearGradient-1)"
            d="M-62 8.5H390V533.5H-62z"
          ></path>
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M44.45 113.482a6.072 6.072 0 110 12.143 6.072 6.072 0 010-12.143zm0 1a5.072 5.072 0 100 10.143 5.072 5.072 0 000-10.143zm-5.205-1.467c.303.127.598.266.884.418a7.84 7.84 0 00-.794.72 9.563 9.563 0 00-10.95 1.885 9.651 9.651 0 00-2.816 6.844.5.5 0 01-1 .003 10.65 10.65 0 013.108-7.554 10.563 10.563 0 0111.568-2.316zm5.23 3.686a.5.5 0 01.492.41l.008.09v1.878h1.88a.5.5 0 01.089.992l-.09.008h-1.88l.001 1.88a.5.5 0 01-.992.09l-.008-.09v-1.88h-1.879a.5.5 0 01-.09-.992l.09-.008h1.878l.001-1.878a.5.5 0 01.5-.5zM35.183 99.46a5.22 5.22 0 110 10.44 5.22 5.22 0 010-10.44zm0 1a4.22 4.22 0 100 8.44 4.22 4.22 0 000-8.44z"
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

export default connect(mapStateToProps, {})(AddUser);
