import * as THREE from 'three'
import classNames from "classnames";
import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PageSearch extends Component {

    constructor(props){
		super(props)
		this.state = {
		}
    }
x
	componentDidMount() {
    }

    componentDidUpdate(prevprops, prevparams) {
    }
    componentWillUnmount() {
    }

	render() {
        return (
            <div className="search-container">
                Search
            </div>
        )
	}
}

function mapStateToProps(state) {
	return {
        user: state.app.user,
        pageSearch: state.pageVideo,
        mainCollection: state.mainCollection
	};
}

export default {
	component: connect(mapStateToProps, {
    })(PageSearch)
}
