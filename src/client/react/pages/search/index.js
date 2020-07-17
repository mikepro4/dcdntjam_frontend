import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import debounce from 'lodash/debounce';

import {
    collectionSearch
} from "../../../redux/actions/mainCollection";

import {
    searchTermUpdate,
    tabUpdate,
    scrollUpdate,
    collectionClear,
    collectionVideoUpdate,
    collectionVideoAppend,
    collectionUsersUpdate,
    collectionUsersAppend
} from "../../../redux/actions/pageSearchActions";

import MainSearchForm from './searchForm'

import Results from "../../components/common/results"


class PageSearch extends Component {

    constructor(props){
		super(props)
		this.state = {
        }
        
        this.debouncedOnChange = debounce(this.onChange, 300);
    }
x
	componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        document.body.scrollTop = this.props.pageSearch.scroll
    }

    componentDidUpdate(prevprops, prevparams) {
        if(this.props.pageSearch.activeTab !== prevprops.pageSearch.activeTab) {
            if(this.props.pageSearch.searchTerm) {
                this.onChange({
                    search: this.props.pageSearch.searchTerm
                }, true)
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    onChange(value) {

    }

    listenToScroll = (event) => {
        let node = document.body
        this.props.scrollUpdate(node.scrollTop)
    }

    loadMoreCollectionVideo(success)  {
        console.log("load more videos")

        this.getCollection(
            this.props.videoCollection.offset + 15,
            this.props.videoCollection.limit + 15,
            this.props.pageSearch.videos.url,
            false,
            () => {
                if(success) {
                    success()
                }
            }
        )
    }

    loadMoreCollectionUser(success)  {
        console.log("load more videos")
        this.getCollection(
            this.props.userCollection.offset + 15,
            this.props.userCollection.limit + 15,
            this.props.pageSearch.users.url,
            false,
            () => {
                if(success) {
                    success()
                }
            }
        )
    }

    getCollection(offset, limit, url, update, success){

        let criteria 
        let searchTerm = this.props.pageSearch.searchTerm

        switch (this.props.pageSearch.activeTab) {
            case 1:
                criteria = {
                    video: searchTerm
                }
                break
            case 2:
                criteria = {
                    account: searchTerm
                }
                break
            case 3:
                criteria = {
                    hardware: searchTerm
                }
                break
        }
        
        this.props.collectionSearch(
            url,
            criteria,
            {
				"created": -1
			},
            offset,
            limit,
            (data) => {
              
                console.log(this.state)

                if(update) {
                    // console.log("new collection")

                    switch (this.props.pageSearch.activeTab) {
                        case 1:
                            this.props.collectionVideoUpdate(this.props.mainCollection)
                            break
                        case 2:
                            this.props.collectionUsersUpdate(this.props.mainCollection)
                            break
                        case 3:
                           
                            break
                    }
                    if(success) {
                        success()
                    }

                } else {
                    // console.log("append to collection")
                    
                    if(success) {
                        success()
                    }

                    switch (this.props.pageSearch.activeTab) {
                        case 1:
                            this.props.collectionVideoAppend(this.props.mainCollection)
                            break
                        case 2:
                            this.props.collectionUsersAppend(this.props.mainCollection)
                            break
                        case 3:
                           
                            break
                    }
                }
            }
        );
    }

    onChange = (newValue, load) => {
        console.log("onchange")

        if(newValue.search !== this.props.pageSearch.searchTerm || load) {
            
            if(!newValue.search) {
                this.props.searchTermUpdate(null)
    
            } else {
                this.props.searchTermUpdate(newValue.search)
    
                switch (this.props.pageSearch.activeTab) {
                    case 1:
                        this.getCollection(
                            0,
                            15,
                            this.props.pageSearch.videos.url,
                            true
                        )
                        break
                    case 2:
                        this.getCollection(
                            0,
                            15,
                            this.props.pageSearch.users.url,
                            true
                        )
                        break
                    case 3:
                        break
                }
            }
        }

    }

    renderResults(searchResults, count, format, loadMore) {
        return(
            <Results
                searchResults={searchResults}
                totalCount={count}
                format={format}
                isFetching={this.props.mainCollection.fetching}
                loadMore={(success) => {
                    loadMore(success)
                }}
            />
        )
    }


    renderTabResults() {
        let results

        switch (this.props.pageSearch.activeTab) {
            case 1:
                results = this.renderResults(
                    this.props.videoCollection.all,
                    this.props.videoCollection.count,
                    "grid",
                    (success) => {
                        this.loadMoreCollectionVideo(success)
                    }
                )
                break
            case 2:
                results = this.renderResults(
                    this.props.userCollection.all,
                    this.props.userCollection.count,
                    "account_list",
                    (success) => {
                        this.loadMoreCollectionUser(success)
                    }
                )
                break
            case 3:
                results = " my submissions"
                break
        }
        return (
            <div className="search-results-container">
                {this.props.pageSearch.searchTerm && results}
            </div>
        )
    }

    renderTabs() {
        return (
            <div 
                className="small-tab-container"
            >
                {this.props.pageSearch.tabs.map(tab => (
                    <div  
                        className={
                            classNames({"active": this.props.pageSearch.activeTab == tab.id}
                        , "small-tab")}
                        onClick={() => this.props.tabUpdate(tab.id)}
                        key={tab.title}
                    >
                        <div className="small-tab-label">{tab.title}</div>
                    </div>
                ))}
            </div>
        )
    }

	render() {
        return (
            <div className="search-container">
                <div className="search-header">
                    <div className="search-header-content">
                        <div className="search-input-wrapper">
                            <MainSearchForm
                                initialValues={ 
                                    {
                                        search: this.props.pageSearch.searchTerm
                                    }
                                }
                                enableReinitialize={true}
                                touchOnChange={true}
                                onSubmit={() => {}}
                                onChange={this.debouncedOnChange}
                            />
                        </div>
                        
                        {this.renderTabs()}
                    </div>
                </div>
                {this.renderTabResults()}
            </div>
        )
	}
}

function mapStateToProps(state) {
	return {
        pageSearch: state.pageSearch,
        videoCollection: state.pageSearch.videos.collection,
        userCollection: state.pageSearch.users.collection,
        mainCollection: state.mainCollection,
	};
}

export default {
	component: connect(mapStateToProps, {
        collectionSearch,
        searchTermUpdate,
        tabUpdate,
        scrollUpdate,
        collectionClear,
        collectionVideoUpdate,
        collectionVideoAppend,
        collectionUsersUpdate,
        collectionUsersAppend
    })(PageSearch)
}
