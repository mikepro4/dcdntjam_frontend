import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';
import Logo from '../icons/logo'

import Anime from 'react-anime';

class Header extends Component {

	constructor(props){
		super(props)
		this.state = {
			menuOpen: false
		}
	}


	componentDidMount() {

	}
	renderAuthButton() {
		return this.props.user.profile ? (
			<div className="user-info">

			<div className="user-avatar-container">
				{/* <Link to={`/profile/${this.props.user.profile._id}`}>
					<img
						className="user-avatar"
						src={this.props.user.profile.profile.photos[0].value}
					/>
					<span className="user-display-name">
						{this.props.user.profile.profile.displayName}
					</span>
				</Link> */}
			</div>

		

			{/* <a href="/api/logout" className="logout-button">
				Logout
			</a> */}

			</div>
		) : (
			<div className="user-info">
				<a href="/api/auth/google" className="login-button">
					Login with Google
				</a>
			</div>
		);
	}

	render() {

		const bottomOpen = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5' }]

		const bottomClosed = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5' }]

		const topOpen = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5' }]

		const topClosed = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5' }]


		return (
			<div className="app-header">

        	<div className="header-left">
				<Logo/>
			</div>
			<div className="header-right">
				{this.renderAuthButton()}
			</div>

			<div className="menu_icon" onClick={() => {
				this.setState({
					menuOpen: !this.state.menuOpen
				})
			}}>
				
				<div className="line_bottom">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1"
						>
						{this.state.menuOpen ? (
							<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={bottomOpen}
							direction='alternate'
							loop={false}
							key={11+Date.now()}
						>
								<path d="M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5"></path>
						</Anime>
						): (
							<Anime
								easing="easeInOutCubic"
								duration={1000}
								d={bottomClosed}
								direction='alternate'
								loop={false}
								key={11+Date.now()}
							>
								<path d="M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5"></path>
									
							</Anime>
						)}
						
						
						</g>
					</svg>

				</div>

				<div className="line_top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1"
						>
						{this.state.menuOpen ? (
							<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={topClosed}
							direction='alternate'
							loop={false}
							key={11+Date.now()}
						>	
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>

						</Anime>
						): (
							<Anime
								easing="easeInOutCubic"
								duration={1000}
								d={topOpen}
								direction='alternate'
								loop={false}
								key={11+Date.now()}
							>

								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5"></path>
									
							</Anime>
						)}
						
						
						</g>
					</svg>

				</div>

				{/* <div className="line_top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1"
						>
						<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={[{value: "M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5"}]}
							direction='alternate'
							loop={false}
							key={11+Date.now()}
						>
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>
						</Anime>
						
						</g>
					</svg>
				</div> */}
			</div>
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

export default connect(mapStateToProps, {})(withRouter(Header));
