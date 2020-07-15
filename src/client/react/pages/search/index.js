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


class PageSearch extends Component {

    constructor(props){
		super(props)
		this.state = {
            offset: 0,
            limit: 20,
        }
        
        this.debouncedOnChange = debounce(this.onChange, 1000);
    }
x
	componentDidMount() {
        // this.getVideoCollection()
    }

    componentDidUpdate(prevprops, prevparams) {
    }
    componentWillUnmount() {
    }

    getVideoCollection(data) {
        console.log("launch video collection")

        if(data) {
            this.props.collectionSearch(
                "/search/videos",
                {
                    video: data.video,
                    account: ""
                },
                "created",
                this.state.offset,
                this.state.limit,
                (data) => {
                    console.log(this.props.mainCollection)
                }
            );
        }
    }

    onChange = (newValue) => {
        this.getVideoCollection({
            video: newValue.search 
        })
    }
    

    handleFormSubmit() { 

    }

	render() {
        return (
            <div className="search-container">
                Search
                <MainSearchForm
                    touchOnChange={true}
                    onChange={this.debouncedOnChange}
                />
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
