import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class SearchInactive extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    >
                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="#FFF" fillRule="nonzero" transform="translate(-225 -681)">
                        <path d="M235 681a9.5 9.5 0 016.57 16.362l6.284 6.284a.5.5 0 01-.638.765l-.07-.057-6.336-6.337A9.459 9.459 0 01235 700a9.5 9.5 0 010-19zm0 1a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"></path>
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

export default connect(mapStateToProps, {})(SearchInactive);
