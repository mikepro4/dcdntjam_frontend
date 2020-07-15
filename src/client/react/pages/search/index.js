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

    getCollection(offset, limit, url, update) {
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
                this.setState({
                    collectionVideo: this.props.mainCollection.collection.all
                })
                console.log(this.state)

                if(update) {
                    console.log("new collection")
                } else {
                    console.log("append to collection")
                }
            }
        );
    }

    onChange = (newValue) => {
        if(!newValue.search) {
            this.setState({
                videoTitle: null,
                accountName: null,
                collectionVideo: []
            }) 
        } else {
            if(this.state.activeTab == 1) {
                this.setState({
                    videoTitle: newValue.search,
                    accountName: null 
                })
                this.getCollection(
                    0,
                    20,
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
    

    handleFormSubmit() { 

    }

    renderTab() {
        let results

        switch (this.state.activeTab) {
            case 1:
                results = (
                    <Results
                        searchResults={this.state.collectionVideo}
                        format="grid"
                        isFetching={this.props.mainCollection.collection.fetching}
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

	render() {
        return (
            <div className="search-container">
                Search
                <MainSearchForm
                    touchOnChange={true}
                    onSubmit={() => {}}
                    onChange={this.debouncedOnChange}
                />
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
