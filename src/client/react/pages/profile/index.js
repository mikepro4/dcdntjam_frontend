import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import {
    updateUser,
    updateRightSlider,
    updateBottomSlider,
    fetchUserByCustomUrl,
    fetchUserByChannelId
} from "../../../redux/actions/appActions";

import {
    fetchUser
} from "../../../redux/actions/userActions";

import {
    profileLoadMyVideos,
    profileClearMyVideos
} from "../../../redux/actions/pageProfileActions";


import YoutubeIcon from "../../components/icons/youtube"

import Results from "../../components/common/results"


class ProfilePage extends Component {

    constructor(props){
		super(props)
		this.state = {
            activeTab: 1,
            scroll: 0,
            topHeight: 100,
            topFixed: false,
            paddingTop: 0,
            topOffset: 0,
		}
		// this.handleChange = this.handleChange.bind(this)
    }
    
    static loadData(store, match) {
        if(match.params.googleId) {
            return store.dispatch(fetchUser(match.params.googleId));
        }

        var re = new RegExp("^@", "i");
        var str = match.params.customUrl;
        var containsAt = re.test(str);

        var re2 = new RegExp("^@channel=", "i");
        var str2 = match.params.customUrl;
        var containsAtChannel = re2.test(str2);

        if(containsAtChannel) {
            if(match.params.customUrl) {
                return store.dispatch(fetchUserByChannelId(match.params.customUrl.substr(9)));
            }
        } else {
            if(containsAt) {
                if(match.params.customUrl) {
                    return store.dispatch(fetchUserByCustomUrl(match.params.customUrl.substr(1)));
                }
            }
        }
        
	}
x
	componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)

        if(this.props.match.params.googleId) {
            this.props.fetchUser(this.props.match.params.googleId);

            if(this.props.user && this.props.user.channelId) {
                this.props.profileLoadMyVideos(this.props.user.channelId)
            }
        }

        this.updateExternalUser(() => {
            this.props.profileLoadMyVideos(this.props.externalUser.channelId)
        })

    }

    componentDidUpdate(prevprops, prevparams) {
        if(prevprops.match.params.customUrl !== this.props.match.params.customUrl) {
            this.props.profileClearMyVideos()

            this.updateExternalUser(() => {
                this.props.profileLoadMyVideos(this.props.externalUser.channelId)
            })
        }
    }
    componentWillUnmount() {
        this.props.profileClearMyVideos()
        window.removeEventListener('scroll', this.listenToScroll)

    }


    listenToScroll = (event) => {
        let node = document.body
   
        let top = document.getElementById("profile-top")
        let scrollValue

        if(node.scrollTop > 0) {
            scrollValue = node.scrollTop
        } else {
            scrollValue = 0
        }

        if(top.clientHeight-node.scrollTop < this.state.topHeight - 58) {
            this.setState({
                topFixed: true, 
                paddingTop: top.clientHeight, 
                scroll: scrollValue,
                topOffset: top.clientHeight-this.state.topHeight
            })
        } else {
            this.setState({
                topFixed: false, 
                paddingTop: 0, 
                topOffset: 0,
                scroll: scrollValue
            })
        }
        console.log(this.state)
    }

    // listenToScroll = () => {
    //     // const winScroll =
    //     //   document.body.scrollTop || document.documentElement.scrollTop
      
    //     // const height =
    //     //   document.documentElement.scrollHeight -
    //     //   document.documentElement.clientHeight
      
    //     // const scrolled = winScroll / height
      
    //     this.setState({
    //       scroll: document.body.scrollTop,
    //     })

    //     console.log(this.state)
    //   }


    updateExternalUser(success) {
        if(this.checkAtChannelSymbol()) {
            if(this.props.match.params.customUrl) {
                this.props.fetchUserByChannelId(
                    this.props.match.params.customUrl.substr(9),
                    success
                );
            }
        } else {
            if(this.checkAtSymbol()) {
                if(this.props.match.params.customUrl) {
                    this.props.fetchUserByCustomUrl(
                        this.props.match.params.customUrl.substr(1),
                        success
                    );
                }
            }
        }
    }


    
    checkAtSymbol() {
        var re = new RegExp("^@", "i");
        var str = this.props.match.params.customUrl;
        var containsAt = re.test(str);
        return containsAt
    }

    checkAtChannelSymbol() {
        var re = new RegExp("^@channel=", "i");
        var str = this.props.match.params.customUrl;
        var containsAt = re.test(str);
        return containsAt
    }


    handleSubmit = values => {
        console.log(values)
        
        this.props.updateUser(
			values,
			() => {
                console.log("success")
			}
		);
    };

    changeTab(tab) {
		this.setState({
			activeTab: tab
		})
    }

    renderPhoto(user) {
        if(user.profile && user.profile.photos) {
            return (<img src={user.profile.photos[0].value}/>)
        } else {
            if(user.channelInfo.thumbnails) {
                return (<img src={user.channelInfo.thumbnails.medium.url}/>)
            }
        }
    }

    renderTab() {
        let results

        switch (this.state.activeTab) {
            case 1:
                results = (
                    <Results
                        searchResults={
                            this.props.pageProfile.videos ? this.props.pageProfile.videos.all : []
                        }
                        format="grid"
                        isFetching={this.props.pageProfile.isFetching}
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


    
    
    renderUser(user) {
        if(user) {
            return(
                <div 
                    className="profile-page"
                    style={{paddingTop: this.state.paddingTop + "px"}}
                >

                    <div 
                        id="profile-top"
                        className={classNames({
                            "fixed": this.state.topFixed
                        }, "profile-top")}
                        style={{
                            top: -this.state.topOffset
                        }}
                    >
    
                        {user && (
                            <div>
                                <div className="profile-avatar">
                                    {this.renderPhoto(user)}
                                </div>
        
                                <div className="profile-name">
                                    {user.displayName ? (user.displayName): (user.profile.displayName)}
                                </div>
        
                                {user.customUrl && (
                                    <div className="profile-username">
                                        <Link to={`/@${user.customUrl}`}>
                                            @{user.customUrl}
                                        </Link>
                                    </div> 
                                )}

                                {(!user.customUrl && user.channelId ) && (
                                    <div className="profile-username">
                                        <Link to={`/@channel=${user.channelId}`}>
                                            @channel={user.channelId}
                                        </Link>
                                    </div> 
                                )}
                            
                            </div>
                        )}
                        
        
                        <ul className="profile-stats">
                            <li className="single-stat">
                                <div className="stat-number" onClick={() => {
                                    this.props.updateRightSlider({
                                        type: "claps"
                                    });
                                }}>
                                    0
                                </div>
        
                                <div className="stat-label">Watched</div>
                            </li>
        
                            <li className="single-stat" onClick={() => {
                                    this.props.updateRightSlider({
                                        type: "watch"
                                    });
                                }}>
                                <div className="stat-number">
                                    0
                                </div>
        
                                <div className="stat-label">CLAPS</div>
                            </li>
        
                            <li className="single-stat">
                                <div className="stat-number">
                                    0
                                </div>
        
                                <div className="stat-label">FANS</div>
                            </li>
        
                            <li className="single-stat">
                                <div className="stat-number">
                                    0
                                </div>
        
                                <div className="stat-label">FOLLOWING</div>
                            </li>
                        </ul>
        
                        <div className="actions-container" onClick={() => {
                                    this.props.updateBottomSlider({
                                        type: "edit"
                                    });
                                }}>
                            <div className="main-group">
                                <a className="button button-edit">Edit profile</a>
                            </div>
                        </div>
        
                        {user.bio && (
                            <div className="profile-bio">
                                {user.bio}
                            </div>
                        )}
        
                        
                        {user.website && (
                            <div className="profile-link">
                                <div className="youtube-icon">
                                    <YoutubeIcon />
                                </div>
                                <a href={`http://${this.props.user.website}`} target="_blank">
                                    {user.website}
                                </a>
                            </div>
                        )}
                        
        
                        <div 
                            className="tab-container"
                        >
                            <div 
                                className={
                                    classNames({"active": this.state.activeTab == 1}
                                , "tab")}
                                onClick={() => this.changeTab(1)}
                            >
                                <div className="tab-label">Videos</div>
                            </div>
        
                            <div  
                                className={
                                    classNames({"active": this.state.activeTab == 2}
                                , "tab")}
                                onClick={() => this.changeTab(2)}
                            >
                                <div className="tab-label">Hardware</div>
                            </div>
        
                            <div  
                                className={
                                    classNames({"active": this.state.activeTab == 3}
                                , "tab")}
                                onClick={() => this.changeTab(3)}
                            >
                                <div className="tab-label">Reposts</div>
                            </div>
                        </div>

                    </div>

                    <div className="tab-results-container">
                        {this.renderTab()}
                    </div>
                    {/* {this.props.match.params.googleId && this.props.match.params.googleId}
                    <UserEditorForm
                    initialValues={
                        this.props.user
                    }
                    onSubmit={this.handleSubmit.bind(this)}
                /> */}
            </div>
        );
        } else {
            return(<div>404 user</div>)
        }
        
    }

	render() {


        let user = null

        if((this.props.match.params.googleId !== this.props.user.googleId) || (this.props.match.params.customUrl)) {
            user = this.props.externalUser
        } else {
            user = this.props.user
        }

        if(!this.checkAtSymbol()) {

            if(!this.props.match.params.googleId && this.props.location.pathname == "/profile") {
                return(
                    <div>
                        <a href="/api/auth/google" className="login-button">
                            Login with Google
                        </a>
                    </div>
                )
            } else {
                if(this.props.location.pathname.includes("/profile")) {

                    if(!this.props.match.params.googleId && this.props.location.pathname == "/profile") {
                        return(
                            <div>
                                <a href="/api/auth/google" className="login-button">
                                    Login with Google
                                </a>
                            </div>
                        )
                    } else {
                        return this.renderUser(user)
                    }

                } else {
                    return (<div> 404 page</div>)
                }
            }
        } else {
            return this.renderUser(user)
            
        }
     
        
	}
}

function mapStateToProps(state) {
	return {
        user: state.app.user,
        externalUser: state.app.externalUser,
        pageProfile: state.pageProfile
	};
}

export default {
	component: connect(mapStateToProps, {
        updateUser,
        fetchUser,
        updateRightSlider,
        updateBottomSlider,
        fetchUserByCustomUrl,
        fetchUserByChannelId,
        profileLoadMyVideos,
        profileClearMyVideos
    })(ProfilePage)
}
