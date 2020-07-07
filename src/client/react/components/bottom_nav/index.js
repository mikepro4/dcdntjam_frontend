import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';
import HomeInactive from "../icons/tab_home_inactive"
import HomeActive from "../icons/tab_home_active"
import FireInactive from "../icons/tab_fire_inactive"
import FireActive from "../icons/tab_fire_active"
import Add from "../icons/tab_Add"
import SearchInactive from "../icons/tab_search_inactive"
import SearchActive from "../icons/tab_search_active"
import UserInactive from "../icons/tab_user_inactive"
import UserActive from "../icons/tab_user_active"

class BottomNav extends Component {

    isActivePath = (pathname) => {
        return this.props.location.pathname == pathname
    }

    renderIcon(url) {
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
            case "/profile":
                if(this.isActivePath(url)) {
                    return <UserActive />
                } else return <UserInactive />
            default:
                return;
        }
    }
    
	render() {

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
            },
            {
              url: "/search",
              name: "Search",
            },
            {
              url: "/profile",
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
                                        <Link to ={link.url} className="link_icon">
                                            {this.renderIcon(link.url)}
                                        </Link>
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

export default connect(mapStateToProps, {})(withRouter(BottomNav));
