import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class UserFollowing extends Component {
	render() {
		return (
			<div className="svg-wrapper">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
    >
 
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-196 -349)">
         
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M206.462 358.602c.914.382 1.725.931 2.403 1.604-.26.211-.498.447-.71.704a6.496 6.496 0 00-9.193.041 6.557 6.557 0 00-1.914 4.65.5.5 0 01-1 .003 7.556 7.556 0 012.205-5.358 7.495 7.495 0 018.209-1.644zm8.108.484a.5.5 0 01.085.635l-.055.072-5.661 6.149a.5.5 0 01-.663.065l-.07-.063-1.909-2.04a.5.5 0 01.664-.744l.067.06 1.539 1.647 5.297-5.752a.5.5 0 01.706-.029zm-10.991-9.766a3.63 3.63 0 110 7.258 3.63 3.63 0 010-7.258zm0 1a2.629 2.629 0 100 5.257 2.629 2.629 0 000-5.257z"
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

export default connect(mapStateToProps, {})(UserFollowing);
