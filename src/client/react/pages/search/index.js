import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    collectionSearch
} from "../../../redux/actions/mainCollection";


class PageSearch extends Component {

    constructor(props){
		super(props)
		this.state = {
            offset: 0,
            limit: 20,
		}
    }
x
	componentDidMount() {
        this.getVideoCollection()
    }

    componentDidUpdate(prevprops, prevparams) {
    }
    componentWillUnmount() {
    }

    getVideoCollection() {
        console.log("launch video collection")

        this.props.collectionSearch(
            "/search/videos",
			{
                video: "Techno",
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

	render() {
        return (
            <div className="search-container">
                Search
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
