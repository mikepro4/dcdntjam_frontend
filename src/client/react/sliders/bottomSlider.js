import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import { motion } from "framer-motion"

import ArrowBack from '../components/icons/arrow_back'

class BottomSlider extends Component {

	constructor(props){
		super(props)
		this.state = {
			sliderOpen: false,
		}
	}


	componentDidMount() {
		if(this.props.open) {
			this.setState({
                sliderOpen: true
			})
			document.body.classList.add("no-scroll")
		}
    }
    
    componentDidUpdate(prevprops) {
        if (prevprops.open !== this.props.open) {
			this.setState({
                sliderOpen: true
			})
			document.body.classList.add("no-scroll")
			console.log("open")
		}
	}
	
	chooseColor() {
		// let colors = [
		// 	"#FF0042", "#5C00FF", "#A100FF", "#00FF5F", "#00F6FF", "#FFDD00"
		// ]
		let colors = [
			"#FFFFFF"
		]

		return colors[Math.floor(Math.random() * colors.length)];
	}

	closeSlider() {
		this.setState({
			sliderOpen: false
		})
		document.body.classList.remove("no-scroll")

		setTimeout(() => {
			this.props.clear()
		}, 500)
	}
	
	renderSlider() {
		const sliderContainer = {
			open: { 
				y: "0",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.3, delay: 0 }
			},
			closed: { 
				y: "100%",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.2, delay: 0 }
			},
		}

		const sliderBar = {
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
				y: "100%",
				backgroundColor: this.chooseColor(),
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { 
					delay: 0,
					duration: 0.2
				}
			})
		}


		const titleContainer = {
			open: { 
				opacity: 1,
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.2, delay: 0 }
			},
			closed: { 
				type: "spring",
				opacity: 0,
				damping: 2,
				opacity: 0,
				stiffness: 10,
				transition: { duration: 0.2, delay: 0 }
			},
		}

		return (
			<div>
				<motion.div
					animate={this.state.sliderOpen ? "open" : "closed"}
					variants={sliderContainer}
					className="bottom-slider-container"
				>
						<div className="bottom-slider-content">
							<motion.div  
								className="bottom-slider-header" 
								animate={this.state.sliderOpen ? "open" : "closed"}
								variants={titleContainer}
							>
								<div  
									className="button-bancel" 
									onClick={() => {
									this.closeSlider()
								}}>
									Cancel

									
								</div>

								<motion.div  
									className="bottom-slider-title" 
									animate={this.state.sliderOpen ? "open" : "closed"}
									variants={titleContainer}
									>
										{this.props.name && (
											<div>{this.props.name}</div>
										)}
								</motion.div>

								<div 
									className="button-done"
									onClick={() => {
										this.closeSlider()
									}}
								>
									Done
								</div>
							</motion.div>
							
							{this.props.children}
						</div>
				</motion.div>

				{/* <motion.div
					animate={this.state.sliderOpen ? "open" : "closed"}
					variants={sliderBar}
					custom={0}
					className="bottom-slider-bar bottom-slider-bar-1"
				/> */}

			</div>

		)
	}



	render() {

		return (
			<div className="right-slider">
				{this.renderSlider()}
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        rightSlider: state.app.rightSlider,
        bottomSlider: state.app.bottomSlider,
	};
}

export default connect(mapStateToProps, {
})(withRouter(BottomSlider));
