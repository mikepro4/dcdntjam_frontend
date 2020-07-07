import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TabThunderInactive extends Component {
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
        <g fill="#FFF" fillRule="nonzero" transform="translate(-181 -743)">
          <path d="M191.309 743.933a1.073 1.073 0 011.932.597l-.002.118-.679 8.26h7.474a1.073 1.073 0 01.962 1.567l-.068.114-10.013 14.41c-.17.27-.448.447-.759.49l-.135.011-.357-.072a1.073 1.073 0 01-.72-.986l.004-.122.787-8.439h-7.652a1.073 1.073 0 01-.962-1.567l.068-.114 10.12-14.267zm.815.578l-10.111 14.256a.073.073 0 00-.004.075.07.07 0 00.041.034l.033.005h7.652a1 1 0 011 .977l-.004.116-.786 8.435.004.032.019.028.079.016.021-.02 10.036-14.443a.073.073 0 00.004-.075.07.07 0 00-.042-.034l-.032-.005h-7.474a1 1 0 01-1-.967l.003-.115.679-8.248a.073.073 0 00-.047-.073.09.09 0 00-.057-.001l-.014.007z"></path>
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

export default connect(mapStateToProps, {})(TabThunderInactive);
