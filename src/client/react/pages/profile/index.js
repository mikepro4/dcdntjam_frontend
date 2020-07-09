import * as THREE from 'three'

import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserEditorForm from "./editForm";


import {
	updateUser,
} from "../../../redux/actions/appActions";

import YoutubeIcon from "../../components/icons/youtube"


class ProfilePage extends Component {

    handleSubmit = values => {
        console.log(values)
        
        this.props.updateUser(
			values,
			() => {
                console.log("success")
			}
		);
    };

	render() {

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
                    <div className="profile-avatar">
                        <img src={this.props.user.profile.photos[0].value}/>
                    </div>

                    <div className="profile-name">
                        {this.props.user.profile.displayName}
                    </div>

                    <div className="profile-username">
                        @{this.props.user.username}
                    </div>

                    <ul className="profile-stats">
                        <li className="single-stat">
                            <div className="stat-number">
                                256
                            </div>

                            <div className="stat-label">Claps</div>
                        </li>

                        <li className="single-stat">
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

                    <div className="actions-container">
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
	};
}

export default {
	component: connect(mapStateToProps, {
        updateUser
    })(ProfilePage)
}
