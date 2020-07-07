import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';

class BottomNav extends Component {

    isActivePath = (pathname, url) => {
        return this.props.location.pathname == url
    }
    
	render() {

        let links = [
            {
              url: "/",
              name: "Home"
            },
            {
              url: "/trending",
              name: "Trending"
            },
            {
              url: "/add",
              name: "Add Jam"
            },
            {
              url: "/search",
              name: "Search"
            },
            {
              url: "/profile",
              name: "Profile"
            }
          ]
		return (
			<div className="app-navigation">
                <ul>
                {links.map(link => {
                    return (
                        <li key={link.url} className={classNames("main_link_container", {
                            "main_link_active": this.isActivePath(link.url, link.url),
                            "add_jam": link.url == "/add"
                            })}
            >
                                <div className="link_wrapper">
                                    <Link to ={link.url} className="main_link">
                                        <span className="main_link+label">{link.name}</span>
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
		location: state.router.location
	};
}

export default connect(mapStateToProps, {})(withRouter(BottomNav));
