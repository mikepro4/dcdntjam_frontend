import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class TikTok extends Component {
	render() {
		return (
			<div className="svg-wrapper">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
    
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-298 -347)">
          <g fill="#FFF" transform="translate(236 337)">
        
              <g transform="translate(62 10)">
                <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1a9 9 0 100 18 9 9 0 000-18zm1.986 3.818a2.495 2.495 0 002.3 2.228v1.556h-.001a2.497 2.497 0 01-2.32-1.117v3.845a2.842 2.842 0 11-2.84-2.842c.058 0 .116.005.175.009v1.4c-.059-.007-.116-.017-.176-.017a1.45 1.45 0 100 2.9c.801 0 1.509-.63 1.509-1.432l.014-6.53h1.34z"></path>
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

export default connect(mapStateToProps, {})(TikTok);
