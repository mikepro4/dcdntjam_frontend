import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import { youtubeUrlParser } from "../../../utils/youtube";

import NewJamForm from "./newJamForm";

import {
    clearLoadedYoutubeVideo,
    loadYoutubeVideoDetails,
} from "../../../redux/actions/youtubeVideoSearch";

import {
    loadChannelInfo,
    updateToken
} from "../../../redux/actions/appActions";

import YoutubePlayer from "../../components/common/player/Player";
import PlayerControls from "../../components/common/player/PlayerControls";
import Loader from "../../components/loader";

import RightSlider from '../rightSlider'

class NewVideo extends Component {
	constructor(props){
		super(props)
		this.state = {
            noScroll: false,
            rightSlider: false
		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {

    }

    handleFormSubmit = ({ url }) => {
        if (youtubeUrlParser(url)) {
			this.props.loadYoutubeVideoDetails(
                youtubeUrlParser(url), 
                this.props.user.accessToken, 
                () => {
                    this.props.updateToken(
                        this.props.user.refreshToken,
                     () => {
                        this.props.loadChannelInfo(
                            this.props.video.snippet.channelId,
                            this.props.user.accessToken
                        )
                    })
                });
		}
    };


	render() {

		return (
            <div 
                className={classNames({
                    "no-scroll": this.state.noScroll
                }, "slider-content-wrapper")}
            >
     
                    <div className="slider-new-video-content">


                        <NewJamForm
                            touchOnChange={true}
                            initialValues={
                                this.props.user
                            }
                            onSubmit={this.handleFormSubmit.bind(this)}
                            onChange={values => {
                                if (youtubeUrlParser(values.url)) {
                                    this.props.clearLoadedYoutubeVideo();
                                    this.handleFormSubmit({ url: values.url });
                                } else {
                                    this.props.clearLoadedYoutubeVideo();
                                }
                            }}
                            
                        />

                        {this.props.isFetching ? (
                                <div className="loader-container">
                                    <Loader/>
                                </div>
                            ) : (<div>

                                    {this.props.currentVideo.videoId && this.props.video.snippet ? (
                                    <div className="loaded-video-container">
                                        <div className="loaded-video-player-area">
                                            <YoutubePlayer
                                                width="375px"
                                                height="210px"
                                                videoId={this.props.currentVideo.videoId}
                                            />
                                            <div className="video-description">
                                                <h2 className="video-title">
                                                    {this.props.video.snippet.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <button
                                            className="button blue-button"
                                        >
                                            {this.props.newVideo ? "Add video" : "Go to video"}
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                                </div>
                            )

                        }

                    </div>

                    
                    {/* {this.state.rightSlider && (
                        <RightSlider
                            open={this.state.rightSlider}
                            clear={() => {
                                this.setState({
                                    rightSlider: false,
                                    noScroll: false
                                })} 
                            }
                            name="Confirm"
                        >
                            Confirm
                        </RightSlider>
                    )} */}
                    
                
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        rightSlider: state.app.rightSlider,
        bottomSlider: state.app.bottomSlider,
        video: state.youtubeVideoSearch.singleVideo,
		newVideo: state.youtubeVideoSearch.newVideo,
		isFetching: state.youtubeVideoSearch.isFetching,
		player: state.player,
        currentVideo: state.currentVideo,
	};
}

export default connect(mapStateToProps, {
    clearLoadedYoutubeVideo,
    loadYoutubeVideoDetails,
    loadChannelInfo,
    updateToken
})(withRouter(NewVideo));
