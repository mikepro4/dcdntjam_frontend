import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import {
	updateBottomSlider
} from "../../../../redux/actions/appActions";

class VideoHeader extends Component {
	render() {
		return (
            <div className="video-header">
                <div className="video-header-left">
                    <div 
                        className="video-avatar"
                        onClick={() => {
                            this.props.updateBottomSlider(null)
                            document.body.classList.remove("no-scroll")
                        }}
                    >
                        <Link 
                            to={`/@${this.props.customUrl}`}
                        >
                            <img src={this.props.avatarUrl} />
                        </Link>
                    </div>
                </div>

                <div className="video-header-right">
                    <div className="video-title">
                        {this.props.videoTitle}
                    </div>

                    <div className="video-bottom-bar">
                        <span className="video-author">
                            {this.props.author}
                        </span>
                    </div>
                </div>
            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
        
	};
}

export default connect(mapStateToProps, {
    updateBottomSlider
})(withRouter(VideoHeader));
