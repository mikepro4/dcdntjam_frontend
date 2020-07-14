import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    loadVideo,
    clearVideo
} from "../../../redux/actions/pageVideoActions";


class PageVideo extends Component {

    constructor(props){
		super(props)
		this.state = {
		}
    }
    
    static loadData(store, match) {
        if(match.params.googleId) {
            return store.dispatch(loadVideo(match.params.googleId));
        }        
	}
x
	componentDidMount() {
        if(this.props.match.params.googleId !== this.props.pageVideo.googleId) {
            this.props.loadVideo(this.props.match.params.googleId);
        }
    }

    componentDidUpdate(prevprops, prevparams) {
        if(prevprops.match.params.googleId !== this.props.match.params.googleId) {
            this.props.loadVideo(this.props.match.params.googleId);
        }
    }
    componentWillUnmount() {
        this.props.clearVideo()
    }

	render() {
        if(this.props.video.snippet) {
            return(
                <div>
                    {this.props.video.snippet.title}
                </div>
            )
        } return(
            <div>
                Loading...
            </div>
        )
       
	}
}

function mapStateToProps(state) {
	return {
        user: state.app.user,
        pageVideo: state.pageVideo,
        video: state.pageVideo.singleVideo
	};
}

export default {
	component: connect(mapStateToProps, {
        loadVideo,
        clearVideo
    })(PageVideo)
}
