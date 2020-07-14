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

import YoutubeIcon from "../../components/icons/youtube"


class ProfilePage extends Component {

    constructor(props){
		super(props)
		this.state = {
            activeTab: 1
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
        if(this.props.match.params.googleId) {
            this.props.fetchUser(this.props.match.params.googleId);
        }

        if(this.checkAtChannelSymbol()) {
            if(this.props.match.params.customUrl) {
                this.props.fetchUserByChannelId(this.props.match.params.customUrl.substr(9));
            }
        } else {
            if(this.checkAtSymbol()) {
                if(this.props.match.params.customUrl) {
                    this.props.fetchUserByCustomUrl(this.props.match.params.customUrl.substr(1));
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
    
    renderUser(user) {
        if(user) {
            return(
                <div className="profile-page">
    
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
    
                            <div className="stat-label">Claps</div>
                        </li>
    
                        <li className="single-stat" onClick={() => {
                                this.props.updateRightSlider({
                                    type: "watch"
                                });
                            }}>
                            <div className="stat-number">
                                0
                            </div>
    
                            <div className="stat-label">WATCHED</div>
                        </li>
    
                        <li className="single-stat">
                            <div className="stat-number">
                                0
                            </div>
    
                            <div className="stat-label">FOLLOWERS</div>
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
                    
    
                    <div className="tab-container">
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
        externalUser: state.app.externalUser
	};
}

export default {
	component: connect(mapStateToProps, {
        updateUser,
        fetchUser,
        updateRightSlider,
        updateBottomSlider,
        fetchUserByCustomUrl,
        fetchUserByChannelId
    })(ProfilePage)
}
