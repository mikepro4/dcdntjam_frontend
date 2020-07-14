import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

class GridResultItem extends Component {

	render() {
		return (
            <div 
                className="results-single-item"
            >
               <Link
                    to={`/video/${this.props.video.googleId}`}
                >
                    {this.props.video.googleId}
               </Link>

            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
        
	};
}

export default connect(mapStateToProps, {
})(withRouter(GridResultItem));
