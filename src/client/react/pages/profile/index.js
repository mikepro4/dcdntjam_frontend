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
    fetchUser,
    clearExternalUser
} from "../../../redux/actions/userActions";

import {
    collectionSearch
} from "../../../redux/actions/mainCollection";

import {
    tabUpdate,
    scrollUpdate,
    collectionClear,
    collectionVideoUpdate,
    collectionVideoAppend,
    collectionRepostsUpdate,
    collectionRepostsAppend
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
    
    componentWillMount() {
        // this.props.collectionClear()
        // this.props.clearExternalUser()
    }
x
	componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        document.body.scrollTop = 0
        this.props.collectionClear()
        // this.props.clearExternalUser()

        if(this.props.match.params.googleId) {
            this.props.fetchUser(this.props.match.params.googleId);

            if(this.props.user && this.props.user.channelId) {
                this.load()
            }
        }

        this.updateExternalUser(() => {
           this.load()
        })

       
    }

    load() {
        switch (this.props.pageProfile.activeTab) {
            case 1:
                this.loadCollectionVideos()
                break
            case 2:
                break
            case 3:
                this.loadCollectionReposts()
                break
        }
    }

    loadCollectionVideos() {
        this.getCollection(
            0,
            15,
            this.props.pageProfile.videos.url,
            true
        )
    }

    loadMoreCollectionVideos(success)  {
        console.log("load more videos")

        this.getCollection(
            this.props.videoCollection.offset + 15,
            this.props.videoCollection.limit + 15,
            this.props.pageProfile.videos.url,
            false,
            () => {
                if(success) {
                    success()
                }
            }
        )
    }

    loadCollectionReposts() {
        this.getCollection(
            0,
            15,
            this.props.pageProfile.reposts.url,
            true
        )
    }

    loadMoreCollectionReposts(success)  {
        console.log("load more videos")

        this.getCollection(
            this.props.repostsCollection.offset + 15,
            this.props.repostsCollection.limit + 15,
            this.props.pageProfile.videos.url,
            false,
            () => {
                if(success) {
                    success()
                }
            }
        )
    }

    componentDidUpdate(prevprops, prevparams) {
        if(prevprops.match.params.customUrl !== this.props.match.params.customUrl) {
            this.props.collectionClear()
            this.updateExternalUser(() => {
                this.load()
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        this.props.collectionClear()
        this.props.clearExternalUser()
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
    }

    getChannelId() {
        if(this.props.match.params.googleId) {
            return this.props.user.channelId
        } else {
            if(this.props.externalUser) {
                return this.props.externalUser.channelId
            }
        }
    }

    getUserlId() {
        if(this.props.match.params.googleId) {
            return this.props.user.googleId
        } else {
            if(this.props.externalUser) {
                if(this.props.externalUser.googleId) {
                    return this.props.externalUser.googleId
                } else {
                    return this.props.externalUser.channelId
                }
            }
        }
    }

    getCollection(offset, limit, url, update, success){
        let criteria 

        switch (this.props.pageProfile.activeTab) {
            case 1:
                criteria = {
                    channelId: this.getChannelId()
                }
                break
            case 2:
                criteria = {
                }
                break
            case 3:
                criteria = {
                    submittedBy: this.getUserlId()
                }
                break
        }

        
        this.props.collectionSearch(
            url,
            criteria,
            {
                "created": -1
            },
            offset,
            limit,
            (data) => {
            
                if(update) {
                    // console.log("new collection")

                    switch (this.props.pageProfile.activeTab) {
                        case 1:
                            this.props.collectionVideoUpdate(this.props.mainCollection)
                            break
                        case 2:
                            break
                        case 3:
                            this.props.collectionRepostsUpdate(this.props.mainCollection)
                            break
                    }
                    if(success) {
                        success()
                    }

                } else {
                    // console.log("append to collection")
                    
                    if(success) {
                        success()
                    }

                    switch (this.props.pageProfile.activeTab) {
                        case 1:
                            this.props.collectionVideoAppend(this.props.mainCollection)
                            break
                        case 2:
                            break
                        case 3:
                            this.props.collectionRepostsAppend(this.props.mainCollection)
                            break
                    }
                }
            }
        );
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

    renderPhoto(user) {
        if(user.profile && user.profile.photos) {
            return (<img src={user.profile.photos[0].value}/>)
        } else {
            if(user.channelInfo.thumbnails) {
                return (<img src={user.channelInfo.thumbnails.medium.url}/>)
            }
        }
    }

    renderTabs() {
        return (
            <div 
                className="tab-container"
            >
                {this.props.pageProfile.tabs.map(tab => (
                    <div  
                        className={
                            classNames({"active": this.props.pageProfile.activeTab == tab.id}
                        , "tab")}
                        onClick={() =>  {
                            this.props.tabUpdate(tab.id)
                            setTimeout(()=> {
                                this.load()
                            }, 100)
                            
                        }}
                        key={tab.title}
                    >
                        <div className="tab-label">{tab.title}</div>
                    </div>
                ))}
            </div>
        )
    }

    renderTabResults() {
        let results

        switch (this.props.pageProfile.activeTab) {
            case 1:
                results = this.renderResults(
                    this.props.videoCollection.all,
                    this.props.videoCollection.count,
                    "grid",
                    (success) => {
                        this.loadMoreCollectionVideos(success)
                    }
                )
                break
            case 2:
                results = " my hardware"
                break
            case 3:
                results = this.renderResults(
                    this.props.repostsCollection.all,
                    this.props.repostsCollection.count,
                    "grid",
                    (success) => {
                        this.loadMoreCollectionReposts(success)
                    }
                )
                break
        }
        return (
            <div className="search-results-container">
                {results}
            </div>
        )
    }

    renderResults(searchResults, count, format, loadMore) {
        return(
            <Results
                searchResults={searchResults}
                totalCount={count}
                format={format}
                isFetching={this.props.mainCollection.fetching}
                loadMore={(success) => {
                    loadMore(success)
                }}
            />
        )
    }

    renderUser(user) {
        console.log("fetchingExternalUser", this.props.fetchingExternalUser)
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

                        {(this.props.match.params.googleId && (this.props.match.params.googleId == this.props.user.googleId) || (this.props.user.channelId == this.props.externalUser.channelId))&& (
                            <div className="actions-container" onClick={() => {
                                    this.props.updateBottomSlider({
                                        type: "edit"
                                    });
                                }}>
                                <div className="main-group">
                                <a className="button button-edit">Edit profile</a>
                                </div>
                            </div>
                        )}
        
                       
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
                        
        
                        
                        {this.renderTabs()}

                    </div>

                    <div className="tab-results-container">
                        {this.renderTabResults()}
                    </div>
            </div>
        );
        } else {
            // some logic for 404
            return(<div> {!this.props.pageProfile.initial && (<div>404 user</div>)}</div>)
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
        fetchingExternalUser: state.app.fetchingExternalUser,
        pageProfile: state.pageProfile,
        videoCollection: state.pageProfile.videos.collection,
        repostsCollection: state.pageProfile.reposts.collection,
        mainCollection: state.mainCollection
	};
}

export default {
	component: connect(mapStateToProps, {
        fetchUser,
        updateUser,
        updateRightSlider,
        updateBottomSlider,
        fetchUserByCustomUrl,
        fetchUserByChannelId,
        collectionSearch,
        tabUpdate,
        scrollUpdate,
        collectionClear,
        collectionVideoUpdate,
        collectionVideoAppend,
        collectionRepostsUpdate,
        collectionRepostsAppend,
        clearExternalUser
    })(ProfilePage)
}
