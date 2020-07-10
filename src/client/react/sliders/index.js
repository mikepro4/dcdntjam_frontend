import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';

import {
    clearRightSlider,
    clearBottomSlider
} from "../../redux/actions/appActions";

import RightSlider from './rightSlider'
import BottomSlider from './bottomSlider'

import SliderClaps from './sliderClaps'

import SliderEditUser from './edit_user'

class Slider extends Component {

	constructor(props){
		super(props)
		this.state = {
			rightSliderOpen: false,
            rightSliderClosed: true,
            bottomSliderOpen: false,
			bottomSliderClosed: true
		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {
        if (!_.isEqual(prevprops.rightSlider, this.props.rightSlider)) {
			this.setState({
                rightSliderOpen: true
            })
		}
    }

    renderRightSlider() {
        switch (this.props.rightSlider.type) {
            case "claps":
                return (
                    <RightSlider
                        open={this.props.rightSlider}
                        clear={() => this.props.clearRightSlider()}
                        name="Claps"
                    >
                        <SliderClaps />
                    </RightSlider>
                )
            case "watch":
                return (
                    <RightSlider
                        open={this.props.rightSlider}
                        clear={() => this.props.clearRightSlider()}
                        name="Watch time"
                    >
                        Watch Time
                    </RightSlider>
                )
            default:
                return state;
        }
    }

    renderBottomSlider() {
        switch (this.props.bottomSlider.type) {
            case "edit":
                return (
                    <div>
                        <BottomSlider
                             open={this.props.bottomSlider}
                             clear={() => this.props.clearBottomSlider()}
                             name="Edit profile"
                             formName="editUserForm"
                             buttonName="Done"
                        >
                            <SliderEditUser/>
                        </BottomSlider>
                    </div>
                )
            default:
                return state;
        }
    }

	render() {

		return (
			<div className="app-slider">
                {this.props.rightSlider && (
                    <div>
                        {this.renderRightSlider()}
                    </div>)}

                {this.props.bottomSlider && (
                    <div>
                        {this.renderBottomSlider()}
                    </div>)}
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
    clearRightSlider,
    clearBottomSlider
})(withRouter(Slider));
