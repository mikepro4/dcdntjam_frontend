import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabFireInactive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="27"
      viewBox="0 0 21 27"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-109 -681)">
          <path fill="#000" d="M0 658H375V730H0z"></path>
          <path
            fill="#FFF"
            d="M124.535 681.534c-2.564.812-4.601 3.125-5.614 5.76-1.124 2.922.42 6.015 0 6.59-.42.575-2.252-.358-2.734-1.08-.615-.919-.814-2.65.036-5.52a.595.595 0 00-.188-.624.577.577 0 00-.641-.067c-5.034 2.626-7.054 7.848-6.207 12.415.848 4.566 4.64 8.492 10.855 8.492 2.903 0 5.412-1.022 7.136-2.926 1.723-1.904 2.639-4.66 2.488-8.03-.154-3.89-2.228-5.8-3.646-7.487-.709-.844-1.25-1.625-1.458-2.621-.207-.997-.089-2.26.684-4.108a.597.597 0 00-.071-.596.58.58 0 00-.55-.226.577.577 0 00-.09.028z"
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

export default connect(mapStateToProps, {})(TabFireInactive);
