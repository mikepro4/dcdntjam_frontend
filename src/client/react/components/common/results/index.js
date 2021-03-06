import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import GridResultItem from "./gridResultItem"
import AccountListItem from "./accountListItem"

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

                    {/* {!this.state.loadMore && this.props.isFetching && (
                        <div>Loading</div>
                    )} */}
				</div>
			);
		// }
    }

    renderAccountList() {
        return (
            <div className="account-list-container">
    
                {/* {!this.state.loadMore && this.props.isFetching ? (
                    <div>Loading</div>
                ): ( */}
                <div>
                        {this.props.searchResults && this.props.searchResults.map(account => {
                            let customUrl = account.customUrl ? account.customUrl : `channel=${account.channelId}`

                            let avatarUrl
                            let displayName
                            if(account.channelInfo && account.channelInfo.thumbnails) {
                                avatarUrl = account.channelInfo.thumbnails.default.url
                            } else {
                                if(account.profile && account.profile[0]) {
                                    avatarUrl = account.profile.photos[0].value
                                }
                            }

                            if(account.channelInfo) {
                                displayName = account.channelInfo.title
                            } else {
                                if(account.profile && account.profile.displayName)  {
                                    displayName = account.profile.displayName
                                }
                            }

                            if(account) {
                                return (
                                    <AccountListItem
                                        key={account._id + new Date()}
                                        firstLine={displayName}
                                        customUrl={customUrl}
                                        avatarUrl={avatarUrl}
                                    />
                                )
                            }
                        
                        })}
                </div>
                {/* )} */}
            </div>
        );
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
            case "account_list":
                return this.renderAccountList();
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
        if(this.props.searchResults && (this.props.totalCount > this.props.searchResults.length)) {
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
