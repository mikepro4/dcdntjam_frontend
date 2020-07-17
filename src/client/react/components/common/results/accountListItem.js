import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

class AccountListItem extends Component {
    

	render() {
		return (
            <div 
                className="results-single-item"
            >
               {/* <Link
                    to={`/video/${this.props.video.googleId}`}
                >
                    <img src={this.props.video.snippet.thumbnails.medium.url}/>
               </Link> */}

               <div className="stats">{this.props.user.displayName}</div>

            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
        
	};
}

export default connect(mapStateToProps, {
})(withRouter(AccountListItem));
