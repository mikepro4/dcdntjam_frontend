import * as THREE from 'three'

import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserEditorForm from "./editForm";


import {
	updateUser,
} from "../../../redux/actions/appActions";


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

		return (
     		<div className="profile-page">
                 {this.props.match.params.googleId && this.props.match.params.googleId}
                 <UserEditorForm
                    initialValues={
                        this.props.user
                    }
                    onSubmit={this.handleSubmit.bind(this)}
                />
			</div>
		);
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
