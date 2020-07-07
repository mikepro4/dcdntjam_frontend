import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabAdd extends Component {
	render() {
		return (
			<div className="svg-wrapper">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-173 -673)">
          <g fill="#101010" opacity="0.569" transform="translate(0 201)">
            <path d="M0 0H471V476H0z"></path>
          </g>
          <path fill="#000" d="M0 658H375V730H0z"></path>
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M192.5 673c10.77 0 19.5 8.73 19.5 19.5s-8.73 19.5-19.5 19.5-19.5-8.73-19.5-19.5 8.73-19.5 19.5-19.5zm0 1c-10.217 0-18.5 8.283-18.5 18.5s8.283 18.5 18.5 18.5 18.5-8.283 18.5-18.5-8.283-18.5-18.5-18.5zm0 9.947a.5.5 0 01.492.41l.008.09V692l8.5.001a.5.5 0 01.09.992l-.09.008H193v7.553a.5.5 0 01-.992.09l-.008-.09v-7.554l-7.5.001a.5.5 0 01-.09-.992l.09-.008h7.5v-7.553a.5.5 0 01.5-.5z"
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

export default connect(mapStateToProps, {})(TabAdd);
