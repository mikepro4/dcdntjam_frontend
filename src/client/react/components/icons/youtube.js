import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Youtube extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-113 -518)">
                    <g transform="translate(30.5 485)">
                        <g transform="translate(34.5 31)">
                        <text
                            fill="#FFF"
                            fontFamily="CompeteSemibold, Compete"
                            fontSize="11"
                            fontWeight="500"
                        >
                            <tspan x="71.489" y="11">
                            youtube.com/DCDNT
                            </tspan>
                        </text>
                        <g transform="translate(48 2)">
                            <path
                            fill="red"
                            fillRule="nonzero"
                            d="M7.995 0s-5 0-6.256.326A2.068 2.068 0 00.326 1.75C0 3.004 0 5.603 0 5.603s0 2.61.326 3.845A2.036 2.036 0 001.74 10.86c1.265.336 6.256.336 6.256.336s5.01 0 6.266-.326a1.988 1.988 0 001.403-1.413C16 8.213 16 5.613 16 5.613s.01-2.609-.336-3.864A1.975 1.975 0 0014.26.346C13.006 0 7.995 0 7.995 0z"
                            ></path>
                            <path
                            fill="#FFF"
                            d="M6.4039015 3.20202744L10.5645602 5.60347144 6.4039015 7.99502788 6.4039015 3.20202744z"
                            ></path>
                        </g>
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

export default connect(mapStateToProps, {})(Youtube);
