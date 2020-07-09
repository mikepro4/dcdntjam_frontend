import * as THREE from 'three'

import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader"
const REACT_VERSION = React.version;


class HomePage extends Component {

	render() {

		return (
     		<div className="home-page">
				  This is home. Updated
				  <Link to="/about"> Go to about > </Link>
				  React version: {REACT_VERSION}
				  {/* <Loader/> */}
			</div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
	};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
