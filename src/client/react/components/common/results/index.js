import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

// import {
// 	hideBottomSlider
// } from "../../../../redux/actions/appActions";

class ResultsContainer extends Component {

    renderGrid() {
        return (
            <div>Grid</div>
        )
    }

    renderList() {
        return (
            <div>List</div>
        )
    }

    renderTimeline() {
        return (
            <div>Timeline</div>
        )
    }

    renderResults() {
        switch (this.props.format) {
			case "grid":
				return this.renderGrid();
			case "list":
				return this.renderList();
			case "timeline":
                return this.renderTimeline();
        }
    }

	render() {
		return (
            <div 
                className="results-container"
                className={classNames({
                    "results-grid": this.props.format == "grid",
                    "results-list": this.props.list == "list",
                    "results-timeline": this.props.list == "timeline"
                })}
            >
               {this.renderResults()}
            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
        
	};
}

export default connect(mapStateToProps, {
})(withRouter(ResultsContainer));
