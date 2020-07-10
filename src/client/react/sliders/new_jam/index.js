import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import { youtubeUrlParser } from "../../../utils/youtube";

import NewJamForm from "./newJamForm";

import {
    clearLoadedYoutubeVideo,
    loadYoutubeVideoDetails
} from "../../../redux/actions/youtubeVideoSearch";

import RightSlider from '../rightSlider'

class SliderEditUser extends Component {
	constructor(props){
		super(props)
		this.state = {
            noScroll: false,
            rightSlider: false
		}
	}


	componentDidMount() {

    }
    
    componentDidUpdate(prevprops) {

    }

    handleFormSubmit = ({ url }) => {
        if (youtubeUrlParser(url)) {
			this.props.loadYoutubeVideoDetails(youtubeUrlParser(url), history);
		}
    };


	render() {

		return (
            <div 
                className={classNames({
                    "no-scroll": this.state.noScroll
                }, "slider-content-wrapper")}
            >
     
                    <div className="slider-claps-content">


                        <NewJamForm
                            touchOnChange={true}
                            initialValues={
                                this.props.user
                            }
                            onSubmit={this.handleFormSubmit.bind(this)}
                            onChange={values => {
                                if (youtubeUrlParser(values.url)) {
                                    this.props.clearLoadedYoutubeVideo();
                                    this.handleFormSubmit({ url: values.url });
                                } else {
                                    this.props.clearLoadedYoutubeVideo();
                                }
                            }}
                            
                        />

                        <div onClick={() => {
                                this.setState({
                                    rightSlider: true,
                                    noScroll: true
                                })
                        }}>Next step</div>

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
                            name="Confirm"
                        >
                            Confirm
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
    clearLoadedYoutubeVideo,
    loadYoutubeVideoDetails
})(withRouter(SliderEditUser));
