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
               <Link
                    to={`/@${this.props.user.customUrl}`}
                >
                    <div className="stats">{this.props.user.displayName}</div>
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
})(withRouter(AccountListItem));
