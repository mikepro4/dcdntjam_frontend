import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Caret extends Component {
	render() {
		return (
			<div className="svg-wrapper">
               <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#FFF" fillRule="nonzero" transform="translate(-351 -580)">
          <g transform="translate(111 553)">
            <path d="M240.397 27.584a.5.5 0 01.636-.071l.07.056 6.334 6.07a.5.5 0 01.065.646l-.06.07-6.333 6.27a.5.5 0 01-.761-.642l.058-.069 5.967-5.909-5.961-5.714a.5.5 0 01-.072-.637l.057-.07z"></path>
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

export default connect(mapStateToProps, {})(Caret);
