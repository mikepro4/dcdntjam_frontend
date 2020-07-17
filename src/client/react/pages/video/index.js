import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    loadVideo,
    clearVideo,
    viewVideo
} from "../../../redux/actions/pageVideoActions";

import {
    updateTime,
    updateCurrentVideo
} from "../../../redux/actions/player";

import YoutubePlayer from "../../components/common/player/Player";
import VideoHeader from "../../components/common/video_header";


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
        this.props.viewVideo(this.props.match.params.googleId)

        document.body.scrollTop = 0
        this.props.updateCurrentVideo(
            this.props.match.params.googleId,
            "stop"
        )
        
        if(this.props.match.params.googleId !== this.props.pageVideo.googleId) {
            this.props.loadVideo(this.props.match.params.googleId);
      
        }
        if(this.props.match.params.googleId) {
            // this.props.updateCurrentVideo(
            //     this.props.match.params.googleId,
            //     "stop"
            // )
        }
    }

    componentDidUpdate(prevprops, prevparams) {
        if(prevprops.match.params.googleId !== this.props.match.params.googleId) {
            // this.props.clearVideo()
            this.props.loadVideo(this.props.match.params.googleId);
            this.props.updateCurrentVideo(
                this.props.match.params.googleId,
                "stop"
            )
        }
    }
    componentWillUnmount() {
        // this.props.clearVideo()
        // this.props.updateTime(0, 0);
    }

	render() {
        if(this.props.video.snippet) {
            return(
                <div>
                    {this.props.currentVideo.videoId && (
                        <YoutubePlayer
                            width="375px"
                            height="210px"
                            videoId={this.props.currentVideo.videoId}
                        />
                    )}

                    <VideoHeader
                        avatarUrl={this.props.video.channelAvatar}
                        videoTitle={this.props.video.snippet.title}
                        author={this.props.video.snippet.channelTitle}
                        customUrl={`channel=${this.props.video.snippet.channelId}`}
                    />
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
        video: state.pageVideo.singleVideo,
        currentVideo: state.currentVideo,
	};
}

export default {
	component: connect(mapStateToProps, {
        loadVideo,
        clearVideo,
        updateTime,
        updateCurrentVideo,
        viewVideo
    })(PageVideo)
}
