import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TickBig extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                >
                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g fill="#FFF" fillRule="nonzero" transform="translate(-320 -447)">
                        <g transform="translate(18 429.5)">
                            <g transform="translate(294 8.5)">
                            <path d="M18.35 9.615a.5.5 0 01.846.527l-.048.076-6.35 8.392a.5.5 0 01-.715.086l-.067-.067-3.258-3.891a.5.5 0 01.703-.706l.063.064 2.855 3.409 5.972-7.89z"></path>
                            </g>
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

export default connect(mapStateToProps, {})(TickBig);
