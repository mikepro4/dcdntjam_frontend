import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import GridResultItem from "./gridResultItem"

class ResultsContainer extends Component {

    constructor(props){
		super(props)
		this.state = {
            loadMore: false
        }
    }

    renderGrid() {
        // if (this.props.isFetching) {
		// 	return <div>Loading</div>;
		// } else {
			return (
				<div className="grid-container">
					{this.props.searchResults && this.props.searchResults.map(video => (
						<GridResultItem
							key={video._id + new Date()}
                            video={video}
						/>
					))}

                    {!this.state.loadMore && this.props.isFetching && (
                        <div>Loading</div>
                    )}
				</div>
			);
		// }
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(!this.state.loadMore) {
            if(this.isInViewport()) {
                this.setState({
                    loadMore: true
                })
                this.props.loadMore(() => {
                    setTimeout(() => {
                        this.setState({
                            loadMore: false
                        })
                    }, 1000)
                })
                
            }
        }
    }

    isInViewport(offset = 100) {
        if (!this.yourElement) return false;
        const top = this.yourElement.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }
    
    
    renderMoreButton(){
        if(this.props.totalCount > this.props.searchResults.length) {
            return(<div ref={(el) => this.yourElement = el}> Load More </div>)
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
               {this.renderMoreButton()}
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
