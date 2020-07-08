import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Logo extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="14"
                viewBox="0 0 111 14"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#FFF" transform="translate(-17 -113)">
                    <path d="M77.97 123.87h9.265l2.196-5.528-1.997-3.018h-6.07l-3.393 8.545zM113.14 113h14.527l-5.37 13.192h-3.154l2.145-5.269h-8.218l-2.145 5.27h-3.153L113.14 113zm-75.622 0h14.527l-5.37 13.192h-3.153l2.15-5.286h-8.218l-2.151 5.286H32.15L37.518 113zm70.602 0h3.154l-5.368 13.192h-2.252l-5.467-8.98-3.654 8.98h-3.154L96.747 113h2.251l5.467 8.982L108.12 113zm6.028 5.27l8.22.002 1.199-2.948h-8.22l-1.199 2.947zM79.208 113h10.07l3.344 5.053-3.231 8.14H73.97L79.208 113zm-11.517 0h3.005l-5.419 13.192h-3.183l3.602-8.766-6.536 3.976-3.798-4.618-3.865 9.408h-3.183L53.734 113h2.216l3.915 4.761L67.691 113zm-29.16 5.258l8.219.001 1.197-2.942H39.73l-1.197 2.941zM32.619 113h3.034l-5.172 13.192H17v-.03l.906-2.313h10.458L32.618 113z"></path>
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

export default connect(mapStateToProps, {})(Logo);
