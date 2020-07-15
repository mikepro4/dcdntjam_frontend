import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import { youtubeUrlParser } from "../../../utils/youtube";

import NewJamForm from "./newJamForm";
import {
    clearLoadedYoutubeVideo,
    loadYoutubeVideoDetails,
    addYoutubeVideo
} from "../../../redux/actions/youtubeVideoSearch";

import {
    loadChannelInfo,
    updateToken,
    updateBottomSlider,
    hideBottomSlider
} from "../../../redux/actions/appActions";

import YoutubePlayer from "../../components/common/player/Player";
import PlayerControls from "../../components/common/player/PlayerControls";
import Loader from "../../components/loader";
import VideoHeader from "../../components/common/video_header/";

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

    addVideo() {
        let video = {
            googleId: this.props.video.googleId,
            channelId: this.props.video.snippet.channelId,
            snippet: this.props.video.snippet,
            contentDetails: this.props.video.contentDetails,
            userId: this.props.user.googleId,
            channelAvatar: this.props.sliderNewVideo.channelInfo.channelInfo.thumbnails.medium.url
        }

        console.log(video)

        this.props.addYoutubeVideo(
            video, 
            this.props.history,
            () => {
                console.log("added")
            }
        )
    }

    closeSlider()  {
        this.props.hideBottomSlider(true)
        document.body.classList.remove("no-scroll")
    }


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
                                <div className="video-loader-container">
                                    <Loader/>
                                </div>
                            ) : (<div>

                                    {this.props.currentVideo.videoId && this.props.video.snippet ? (
                                    <div className="loaded-video-container">
                                        <YoutubePlayer
                                            width="375px"
                                            height="210px"
                                            videoId={this.props.currentVideo.videoId}
                                        />

                                        {this.props.video.snippet && (this.props.video.snippet.channelId !== this.props.user.channelId) && (
                                            <div>
                                                {this.props.sliderNewVideo.channelInfo && (this.props.video.snippet.channelId == this.props.sliderNewVideo.channelInfo.channelId) ? (
                                                    <VideoHeader
                                                        avatarUrl={this.props.sliderNewVideo.channelInfo.channelInfo.thumbnails.medium.url}
                                                        videoTitle={this.props.video.snippet.title}
                                                        author={this.props.sliderNewVideo.channelInfo.channelInfo.title}
                                                        customUrl={this.props.sliderNewVideo.channelInfo.channelInfo.customUrl}
                                                    />
                                                    
                                                ) : (
                                                    <div className="details-loader-container">
                                                        <Loader/>
                                                    </div>
                                                )}
                                               
                                            </div>
                                        )}
                                        
                                        {this.props.video.snippet && (this.props.video.snippet.channelId == this.props.user.channelId) && (
                                            <div>
                                                {this.props.video.snippet 
                                                    && this.props.sliderNewVideo.channelInfo
                                                    && (this.props.sliderNewVideo.channelInfo.channelId == this.props.video.snippet.channelId) 
                                                    && (this.props.video.snippet.channelId == this.props.user.channelId) ? (
                                                        <VideoHeader
                                                            avatarUrl={this.props.sliderNewVideo.channelInfo.profile.photos[0].value}
                                                            videoTitle={this.props.video.snippet.title}
                                                            author={this.props.sliderNewVideo.channelInfo.channelInfo.title}
                                                            customUrl={this.props.sliderNewVideo.channelInfo.customUrl}
                                                        />
                                                    ): (
                                                        <div className="details-loader-container">
                                                            <Loader/>
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                            

                                        {/* <div className="video-meta">
                                            {this.props.video.snippet && (this.props.video.snippet.channelId == this.props.user.channelId) && (
                                                <div className="single-meta-field">My video</div>
                                            )}

                                            {this.props.newVideo && (
                                                <div className="single-meta-field">New video</div>
                                            )}
                                        </div> */}

                                        {this.props.newVideo ? (
                                            <button
                                                className="button blue-button"
                                                onClick={() => {
                                                        this.addVideo()
                                                        this.closeSlider()
                                                    }
                                                }
                                            >
                                                Add video
                                            </button>
                                        ): (
                                            <Link
                                                className="button "
                                                onClick={() => this.closeSlider()}
                                                to={`/video/${this.props.video.googleId}`}
                                            >
                                                Go to video
                                            </Link>
                                        )}

                                        

                                        {/* <button
                                            className="button blue-button"
                                        >
                                            {this.props.newVideo ? "Add video" : "Go to video"}
                                        </button> */}
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
        externalUser: state.app.externalUser,
        sliderNewVideo: state.sliderNewVideo
	};
}

export default connect(mapStateToProps, {
    clearLoadedYoutubeVideo,
    addYoutubeVideo,
    loadYoutubeVideoDetails,
    loadChannelInfo,
    updateToken,
    updateBottomSlider,
    
})(withRouter(NewVideo));
