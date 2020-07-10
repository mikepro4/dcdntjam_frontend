import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import RightSlider from './rightSlider'

class SliderClaps extends Component {

	constructor(props){
		super(props)
		this.state = {
            slider: null
		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {

    }



	render() {

		return (
			<div className="slider-content-wrapper">
                <div onClick={() => {
                    this.setState({
                        slider: true
                    })
                }}>
                    Claps
                </div>
                {this.state.slider && (
                    <RightSlider 
                        open={this.state.slider}
                        name="stuff"
                        clear={() => {
                            this.setState({
                                slider: null
                            })
                        }}
                    />
                )}
               
                
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
})(withRouter(SliderClaps));
