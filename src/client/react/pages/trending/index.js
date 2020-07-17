import * as THREE from 'three'

import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader"
// const REACT_VERSION = React.version;

import {PullToRefresh} from "react-js-pull-to-refresh";
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";

import {
    collectionSearch
} from "../../../redux/actions/mainCollection";

import {
    scrollUpdate,
	collectionClear,
	collectionUpdate,
	collectionAppend
} from "../../../redux/actions/pageTrendingActions";

import Results from "../../components/common/results"


class TrendingPage extends Component {


	componentDidMount() {
        document.body.scrollTop = 0
	}

	componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
		document.body.scrollTop = this.props.pageTrending.scroll
		if(!this.props.trending.all) {
			this.loadFeed()
		}
    }

    componentDidUpdate(prevprops, prevparams) {
	}
	
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
	}
	
	listenToScroll = (event) => {
        let node = document.body
        this.props.scrollUpdate(node.scrollTop)
	}
	
	loadMoreCollectionFeed(success)  {
        console.log("load more feed")

        this.getCollection(
            this.props.feed.offset + 15,
            this.props.feed.limit + 15,
            this.props.pageTrending.trending.url,
            false,
            () => {
                if(success) {
                    success()
                }
            }
        )
	}
	
	getCollection(offset, limit, url, update, success){

        let criteria  = {}
        
        this.props.collectionSearch(
            url,
            criteria,
            {
				"views": -1
			},
            offset,
            limit,
            (data) => {
              
                if(update) {

					this.props.collectionUpdate(this.props.mainCollection)
                    if(success) {
                        success()
                    }

                } else {
                    
                    if(success) {
                        success()
					}
					
					this.props.collectionAppend(this.props.mainCollection)


                }
            }
        );
	}
	
	loadFeed = (success) => {
        this.getCollection(
			0,
			15,
			this.props.pageTrending.trending.url,
			true,
			success
		)
    }


	
	renderResults(searchResults, count, format, loadMore) {
        return(
            <Results
                searchResults={this.props.trending.all}
                totalCount={this.props.trending.count}
                format={"grid"}
                isFetching={this.props.mainCollection.fetching}
                loadMore={(success) => {
                    this.loadMoreCollectionFeed(success)
                }}
            />
        )
	}

	onRefresh = () => {
		return new Promise((resolve) => {
			this.loadFeed(() => {
				return resolve()
			})
        });
	}

	render() {

		return (
     		<div className="home-page">
				 <PullToRefresh
					pullDownContent={<PullDownContent />}
					releaseContent={<ReleaseContent />}
					refreshContent={<RefreshContent />}
					pullDownThreshold={100}
					onRefresh={this.onRefresh.bind(this)}
					triggerHeight={100}
					backgroundColor='black'
					startInvisible={true}
                >
				    {this.renderResults()}
				</PullToRefresh>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pageTrending: state.pageTrending,
		trending: state.pageTrending.trending.collection,
		mainCollection: state.mainCollection
	};
}

export default {
	component: connect(mapStateToProps, {
		scrollUpdate,
        collectionClear,
        collectionSearch,
		collectionUpdate,
	    collectionAppend
	})(TrendingPage)
}
