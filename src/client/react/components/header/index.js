import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';
import Logo from '../icons/logo'

import Anime from 'react-anime';
import { motion } from "framer-motion"

class Header extends Component {

	constructor(props){
		super(props)
		this.state = {
			menuOpen: false,
			menuClosing: false
		}
	}


	componentDidMount() {

	}
	renderAuthButton() {
		return this.props.user ? (
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

		

			<a href="/api/logout" className="logout-button">
				Logout
			</a>

			</div>
		) : (
			<div className="user-info">
				<a href="/api/auth/google" className="login-button">
					Login with Google
				</a>
			</div>
		);
	}

	renderLines() {
		const bottomOpen = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5' }]

		const bottomClosed = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5' }]

		const topOpen = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5' }]

		const topClosed = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5' }]


		if(!this.state.menuOpen && !this.state.menuClosing) {
			return(
				<div>
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

								<path d="M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5"></path>
						
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
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>
							</g>
						</svg>

					</div>
				</div>
			)
		}

		if(this.state.menuOpen) {
			return(<div>
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
						<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={bottomOpen}
							loop={false}
							key={11+Date.now()}
						>
								<path d="M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5"></path>
						</Anime>
						)
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
							<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={topClosed}
							loop={false}
							key={11+Date.now()}
						>	
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>

						</Anime>
					
						
						
						</g>
					</svg>

				</div>
				</div>
			)
		}

		if(this.state.menuClosing) {
			return(
				<div>
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
						<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={bottomClosed}
							loop={false}
							key={11+Date.now()}
						>
							<path d="M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5"></path>
								
						</Anime>
						
						
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
			
							<Anime
								easing="easeInOutCubic"
								duration={1000}
								d={topOpen}
								loop={false}
								key={11+Date.now()}
							>

								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5"></path>
									
							</Anime>
						
						
						</g>
					</svg>

				</div>
				</div>
			)
		}
	}

	handleClick() {
		if(!this.state.menuOpen && !this.state.menuClosing) {
			this.setState({
				menuOpen: true
			})
			document.body.classList.add("no-scroll")
		}
		
		if(this.state.menuOpen) {
			this.setState({
				menuOpen: false,
				menuClosing: true
			})

			document.body.classList.remove("no-scroll")

			setTimeout(() => {
				this.setState({
					menuClosing: false
				})
			}, 1000)
		}
	}

	chooseColor() {
		let colors = [
			"#ffffff", "#5C00FF"
		]

		return colors[Math.floor(Math.random() * colors.length)];
	}

	renderMenu() {
		const menuContainer = {
			open: { 
				y: 0,
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.4, delay: 0.3 }
			},
			closed: { 
				y: "-100%",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.2 }
			},
		}

		const menuBar = {
			open: (custom) => ({
				y: 0,
				backgroundColor: this.chooseColor(),
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { 
					delay: 0 + custom,
					duration: 0.4, 
				}
			}),
			closed: (custom) => ({
				y: "-100%",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { 
					delay: 0,
					duration: 0.2
				}
			})
		}

		return (
			<div>
				<motion.div
					animate={this.state.menuOpen ? "open" : "closed"}
					variants={menuContainer}
					className="menu_container"
				>
						<div className="menu_content">
							{this.renderAuthButton()}
						</div>
				</motion.div>

				<motion.div
					animate={this.state.menuOpen ? "open" : "closed"}
					variants={menuBar}
					custom={0}
					className="menu_bar menu_bar_1"
				/>

				<motion.div
					animate={this.state.menuOpen ? "open" : "closed"}
					variants={menuBar}
					custom={0.1}
					className="menu_bar menu_bar_2"
				/>
			</div>

		)
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
				<Link to="/"  onClick={() => {
				if(this.state.menuOpen) {
					this.setState({
						menuOpen: false,
						menuClosing: true
					})

					document.body.classList.remove("no-scroll")
		
					setTimeout(() => {
						this.setState({
							menuClosing: false
						})
					}, 1000)
				}
			}}><Logo/></Link>
			</div>
			<div className="header-right">
			</div>

			<div className="menu_icon" onClick={() => {
				this.handleClick()
			}}>
				
			{this.renderLines()}

			{this.renderMenu()}
			
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
