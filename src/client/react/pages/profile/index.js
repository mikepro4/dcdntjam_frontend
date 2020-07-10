import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import {
    updateUser,
    updateRightSlider,
	updateBottomSlider
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
	}

	componentDidMount() {
        if(this.props.match.params.googleId) {
            this.props.fetchUser(this.props.match.params.googleId);
        }
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

	render() {

        let user = ""

        if(this.props.match.params.googleId !== this.props.user.googleId) {
            user = this.props.externalUser
        } else {
            user = this.props.user
        }

        if(!this.props.match.params.googleId) {
            return(
                <div>
                    <a href="/api/auth/google" className="login-button">
                        Login with Google
                    </a>
                </div>
            )
        } else {
            return (
                <div className="profile-page">

                    {user && (
                        <div>
                            <div className="profile-avatar">
                                <img src={user.profile.photos[0].value}/>
                            </div>

                            <div className="profile-name">
                                {user.profile.displayName}
                            </div>

                            {user.username && (
                                <div className="profile-username">
                                    @{user.username}
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
                                256
                            </div>

                            <div className="stat-label">Claps</div>
                        </li>

                        <li className="single-stat" onClick={() => {
                                this.props.updateRightSlider({
                                    type: "watch"
                                });
                            }}>
                            <div className="stat-number">
                                2.5hrs
                            </div>

                            <div className="stat-label">WATCHED</div>
                        </li>

                        <li className="single-stat">
                            <div className="stat-number">
                                5.5K
                            </div>

                            <div className="stat-label">FOLLOWERS</div>
                        </li>

                        <li className="single-stat">
                            <div className="stat-number">
                                176
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

                    <div className="profile-bio">
                        Designer and musician from New York performing DAWless Techno.
                    </div>

                    <div className="profile-link">
                        <div className="youtube-icon">
                            <YoutubeIcon />
                        </div>
                        <a href="https://youtube.com/DCDNT" target="_blank">youtube.com/DCDNT</a>
                    </div>

                    <div className="tab-container">
                        <div 
                            className={
                                classNames({"active": this.state.activeTab == 1}
                            , "tab")}
                            onClick={() => this.changeTab(1)}
                        >
                            <div className="tab-label">My Jams</div>
                        </div>

                        <div  
                            className={
                                classNames({"active": this.state.activeTab == 2}
                            , "tab")}
                            onClick={() => this.changeTab(2)}
                        >
                            <div className="tab-label">My Claps</div>
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
        updateBottomSlider
    })(ProfilePage)
}
