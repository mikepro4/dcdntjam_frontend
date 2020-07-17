import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import debounce from 'lodash/debounce';

import {
    collectionSearch
} from "../../../redux/actions/mainCollection";

import MainSearchForm from './searchForm'

import Results from "../../components/common/results"


class PageSearch extends Component {

    constructor(props){
		super(props)
		this.state = {
            collectionVideo: [],
            collectionVideoUrl: "/search/videos",
            collectionVideoCount: 0,
            videoTitle: null,
            accountName: null,
            activeTab: 1,
        }
        
        this.debouncedOnChange = debounce(this.onChange, 300);
    }
x
	componentDidMount() {
        // this.getVideoCollection()
    }

    componentDidUpdate(prevprops, prevparams) {
    }
    componentWillUnmount() {
    }

    getCollection(offset, limit, url, update, success){
        console.log("load collection")

        this.props.collectionSearch(
            url,
            {
                video: this.state.videoTitle,
                account: this.state.accountName
            },
            "created",
            offset,
            limit,
            (data) => {
              
                console.log(this.state)

                if(update) {
                    console.log("new collection")
                    if(success) {
                        success()
                    }

                    this.setState({
                        collectionVideo: this.props.mainCollection.collection.all,
                        collectionVideoCount: this.props.mainCollection.collection.count
                    })
                } else {
                    console.log("append to collection")
                    let newArray = this.state.collectionVideo.concat(this.props.mainCollection.collection.all);
                    this.setState({
                        collectionVideo: newArray
                    })
                    if(success) {
                        success()
                    }
                }
            }
        );
    }

    onChange = (newValue) => {
        if(!newValue.search) {
            this.setState({
                videoTitle: null,
                accountName: null,
                collectionVideo: [],
                collectionVideoCount: 0
            }) 
        } else {
            if(this.state.activeTab == 1) {
                this.setState({
                    videoTitle: newValue.search,
                    accountName: null 
                })
                this.getCollection(
                    0,
                    15,
                    this.state.collectionVideoUrl,
                    true
                )
            } if(this.state.activeTab == 2) {
    
                this.setState({
                    videoTitle: "",
                    accountName: newValue.search  
                })
    
                this.getCollection(
                    0,
                    20,
                    "/search/user",
                    true
                )
            }
        }
    }
    
    loadMoreCollectionVideo(success)  {
        console.log("load more videos")

        this.getCollection(
            this.props.mainCollection.collection.offset + 15,
            this.props.mainCollection.collection.limit + 15,
            "/search/videos",
            false,
            () => {
                if(success) {
                    success()
                }
                console.log(this.props.mainCollection.collection)
            }
        )
    }

    renderTab() {
        let results

        switch (this.state.activeTab) {
            case 1:
                results = (
                    <Results
                        searchResults={this.state.collectionVideo}
                        totalCount={this.state.collectionVideoCount}
                        format="grid"
                        isFetching={this.props.mainCollection.collection.fetching}
                        loadMore={(success) => {
                            this.loadMoreCollectionVideo(success)
                        }}
                    />
                )
                break
            case 2:
                results = " my hardware"
                break
            case 3:
                results = " my submissions"
                break
        }

        return (
            <div>
                {results}
            </div>
        )
    }

    changeTab(tab) {
		this.setState({
			activeTab: tab
		})
    }

	render() {
        return (
            <div className="search-container">
                <div className="search-header">
                    <div className="search-header-content">
                        <div className="search-input-wrapper">
                            <MainSearchForm
                                touchOnChange={true}
                                onSubmit={() => {}}
                                onChange={this.debouncedOnChange}
                            />
                        </div>

                        <div 
                            className="small-tab-container"
                        >
                            <div 
                                className={
                                    classNames({"active": this.state.activeTab == 1}
                                , "small-tab")}
                                onClick={() => this.changeTab(1)}
                            >
                                <div className="small-tab-label">Videos</div>
                            </div>
        
                            <div  
                                className={
                                    classNames({"active": this.state.activeTab == 2}
                                , "small-tab")}
                                onClick={() => this.changeTab(2)}
                            >
                                <div className="small-tab-label">Channels</div>
                            </div>
        
                            <div  
                                className={
                                    classNames({"active": this.state.activeTab == 3}
                                , "small-tab")}
                                onClick={() => this.changeTab(3)}
                            >
                                <div className="small-tab-label">Hardware</div>
                            </div>
                        </div>
{/* 
                        <div className="search-count-header">
                            {this.state.collectionVideoCount > 0 ? (
                                    <div className="search-count-wrapper">
                                        {this.state.collectionVideoCount}
                                        result{this.state.collectionVideoCount == 0 || this.state.collectionVideoCount > 1 && "s"}
                                    </div>
                                ):(
                                    <div className="search-count-wrapper empty">
                                    </div>
                                )}
                        </div> */}


                    </div>
                </div>
                {this.renderTab()}
            </div>
        )
	}
}

function mapStateToProps(state) {
	return {
        user: state.app.user,
        pageSearch: state.pageVideo,
        mainCollection: state.mainCollection
	};
}

export default {
	component: connect(mapStateToProps, {
        collectionSearch
    })(PageSearch)
}
