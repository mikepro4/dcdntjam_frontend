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
            collectionUser: [],
            collectionUserUrl: "/search/users",
            collectionUserCount: 0,
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

        let criteria 

        switch (this.state.activeTab) {
            case 1:
                criteria = {
                    video: this.state.search
                }
                break
            case 2:
                criteria = {
                    account: this.state.search
                }
                break
            case 3:
                criteria = {
                    hardware: this.state.search
                }
                break
        }
        
        this.props.collectionSearch(
            url,
            criteria,
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

                    switch (this.state.activeTab) {
                        case 1:
                            this.setState({
                                collectionVideo: this.props.mainCollection.collection.all,
                                collectionVideoCount: this.props.mainCollection.collection.count
                            })
                            break
                        case 2:
                            this.setState({
                                collectionUser: this.props.mainCollection.collection.all,
                                collectionUserCount: this.props.mainCollection.collection.count
                            })
                            break
                        case 3:
                            this.setState({
                                collectionHardware: this.props.mainCollection.collection.all,
                                collectionHardwareCount: this.props.mainCollection.collection.count
                            })
                            break
                        }
                } else {
                    console.log("append to collection")
                    
                    let newArray
                    switch (this.state.activeTab) {
                        case 1:
                            newArray = this.state.collectionVideo.concat(this.props.mainCollection.collection.all);
                            this.setState({
                                collectionVideo: newArray
                            })
                            break
                        case 2:
                             newArray = this.state.collectionUser.concat(this.props.mainCollection.collection.all);
                            this.setState({
                                collectionUser: newArray
                            })
                            break
                        case 3:
                            newArray = this.state.collectionHardware.concat(this.props.mainCollection.collection.all);
                            this.setState({
                                collectionHardware: newArray
                            })
                            break
                        }
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
                search: null,
                collectionVideo: [],
                collectionVideoCount: 0,
                collectionUser: [],
                collectionUserCount: 0
            }) 
        } else {
            this.setState({
                search: newValue.search
            })
            if(this.state.activeTab == 1) {
               
                this.getCollection(
                    0,
                    15,
                    this.state.collectionVideoUrl,
                    true
                )
            } if(this.state.activeTab == 2) {
    
                this.getCollection(
                    0,
                    20,
                    this.state.collectionUserUrl,
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
            this.state.collectionVideoUrl,
            false,
            () => {
                if(success) {
                    success()
                }
                console.log(this.props.mainCollection.collection)
            }
        )
    }

    loadMoreCollectionUser(success)  {
        console.log("load more videos")

        this.getCollection(
            this.props.mainCollection.collection.offset + 15,
            this.props.mainCollection.collection.limit + 15,
            this.state.collectionUserUrl,
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
                results = (
                    <Results
                        searchResults={this.state.collectionUser}
                        totalCount={this.state.collectionUserCount}
                        format="account_list"
                        isFetching={this.props.mainCollection.collection.fetching}
                        loadMore={(success) => {
                            this.loadMoreCollectionUser(success)
                        }}
                    />
                )
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
        }, () => {
            if(this.state.search) {
                this.onChange({search: this.state.search})
            }
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
