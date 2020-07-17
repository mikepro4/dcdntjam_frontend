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
                    to={`/@${this.props.customUrl}`}
                >

                    <div className="result-account-left">
                        <img src={this.props.avatarUrl}/>
                    </div>

                    <div className="result-account-right">
                        <div className="result-account-first-line">
                            {this.props.firstLine}
                        </div>

                        {this.props.customUrl && (
                            <div className="result-account-second-line">
                                @{this.props.customUrl}
                            </div>
                        )}
                    </div>
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
