import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';
import HomeInactive from "../icons/tab_home_inactive"
import HomeActive from "../icons/tab_home_active"
import FireInactive from "../icons/tab_fire_inactive"
import FireActive from "../icons/tab_fire_active"
import Add from "../icons/tab_add"
import SearchInactive from "../icons/tab_search_inactive"
import SearchActive from "../icons/tab_search_active"
import UserInactive from "../icons/tab_user_inactive"
import UserActive from "../icons/tab_user_active"

import {
	updateBottomSlider
} from "../../../redux/actions/appActions";

class BottomNav extends Component {

    isActivePath = (pathname) => {
        return this.props.location.pathname == pathname
    }

    renderIcon(url) {
        if(url.includes("/profile")) {
            if(this.props.user) {
                if(this.props.location.pathname.includes(this.props.user.googleId)) {
                    return <UserActive />
                } else return <UserInactive />
            } else {
                if(this.props.location.pathname == "/profile") {
                    return <UserActive />
                } else return <UserInactive />
            }
            
        } else {
            switch (url) {
                case "/":
                    if(this.isActivePath(url)) {
                        return <HomeActive />
                    } else return <HomeInactive />
                case "/trending":
                    if(this.isActivePath(url)) {
                        return <FireActive />
                    } else return <FireInactive />
                case "/add":
                    return <Add />
                case "/search":
                    if(this.isActivePath(url)) {
                        return <SearchActive />
                    } else return <SearchInactive />
                default:
                    return;
            }
        }
        
    }
    
	render() {

        let profileLink;

        if (this.props.user) {
            profileLink = `/profile/${this.props.user.googleId}`
        } else {
            profileLink = "/profile"
        }

        let links = [
            {
              url: "/",
              name: "Home",
            },
            {
              url: "/trending",
              name: "Trending",
            },
            {
              url: "/add",
              name: "Add Jam",
              add: true
            },
            {
              url: "/search",
              name: "Search",
            },
            {
              url: profileLink,
              name: "Profile",
            }
        ]
		return (

            <div 
                className={classNames({
                    "hidden": (this.props.location.pathname == "/add") || this.props.scrollingDown
                }, "app_navigation")}
            >
                
                    <ul className="main_links_container">
                    {links.map(link => {
                        return (
                            <li key={link.url} className={classNames("main_link_container", {
                                "main_link_active": this.isActivePath(link.url),
                                "add_jam": link.url == "/add"
                                })}
                >
                                    <div className="link_wrapper">

                                        {link.add ? (
                                            <div 
                                                className="add-button"
                                                onClick={() => {
                                                    this.props.updateBottomSlider({
                                                        type: "new_jam"
                                                    })
                                                }}
                                            >
                                                {this.renderIcon(link.url)}
                                            </div>
                                        ) : (
                                            <Link to={link.url} className="link_icon">
                                                {this.renderIcon(link.url)}
                                            </Link>
                                        )}
                                        
                                    </div>
                            </li>
                            )
                        })}
                </ul>
            </div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        scrollingDown: state.app.scrollingDown
	};
}

export default connect(mapStateToProps, {
    updateBottomSlider
})(withRouter(BottomNav));
