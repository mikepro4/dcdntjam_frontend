import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import GridResultItem from "./gridResultItem"

class ResultsContainer extends Component {

    renderGrid() {
        if (this.props.isFetching) {
			return <div>Loading</div>;
		} else {
			return (
				<div className="grid-container">
					{this.props.searchResults && this.props.searchResults.map(video => (
						<GridResultItem
							key={video._id}
                            video={video}
						/>
					))}
				</div>
			);
		}
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
                className={classNames({
                    "results-grid": this.props.format == "grid",
                    "results-list": this.props.list == "list",
                    "results-timeline": this.props.list == "timeline"
                }, "results-container")}
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
