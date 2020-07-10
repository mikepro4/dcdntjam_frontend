import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import UserEditorForm from "./editForm";

import {
    updateUser,
    hideBottomSlider,
    clearBottomSlider
} from "../../../redux/actions/appActions";

import RightSlider from '../rightSlider'

class SliderEditUser extends Component {
	constructor(props){
		super(props)
		this.state = {
            slider: null,
            noScroll: false,
            rightSlider: false
		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {

    }

    handleSubmit = values => {
        console.log(values)
        
        this.props.updateUser(
			values,
			() => {
                console.log("success")
                this.props.hideBottomSlider(true)
			}
		);
    };


	render() {

		return (
            <div 
                className={classNames({
                    "no-scroll": this.state.noScroll
                }, "slider-content-wrapper")}
            >
     
                    <div className="slider-claps-content">


                            {this.props.match.params.googleId && this.props.match.params.googleId}
                            <UserEditorForm
                            touchOnChange={true}
                            initialValues={
                                this.props.user
                            }
                            onSubmit={this.handleSubmit.bind(this)}
                        />

                        <div onClick={() => {
                                this.setState({
                                    rightSlider: true,
                                    noScroll: true
                                })
                        }}>Next Slider</div>

                    </div>

                    
                    {this.state.rightSlider && (
                        <RightSlider
                            open={this.state.rightSlider}
                            clear={() => {
                                this.setState({
                                    rightSlider: false,
                                    noScroll: false
                                })} 
                            }
                            name="Watch time"
                        >
                            Watch Time
                        </RightSlider>
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
    hideBottomSlider,
    clearBottomSlider,
    updateUser
})(withRouter(SliderEditUser));
