import * as _ from "lodash";
import axios from "axios";

import {
    LOAD_VIDEO,
    LOAD_VIDEO_SUCCESS,
	CLEAR_PAGE_VIDEO,
	CURRENT_VIDEO_UPDATE,
	VIEW_VIDEO
} from "../actions/types";

import { reset, submit } from "redux-form";

// =============================================================================

export const loadVideo = (googleId) => async (dispatch, getState, api) => {
	const res = await api.post("/load_video_details", {
		googleId: googleId
    });
    
    dispatch({
		type: LOAD_VIDEO,
	})

	dispatch({
		type: LOAD_VIDEO_SUCCESS,
		payload: res.data
	})

	// if(res.data) {
	// 	dispatch({
	// 		type: CURRENT_VIDEO_UPDATE,
	// 		payload: googleId,
	// 		playerAction: "stop"
	// 	});
	// }
}
	
	

export const clearVideo = () => dispatch => {
	dispatch({
		type: CLEAR_PAGE_VIDEO
	});
};

export const viewVideo = (googleId) => async (dispatch, getState, api) => {
	const res = await api.post("/video/view", {
		googleId: googleId
    });
    
	dispatch({
		type: VIEW_VIDEO,
		payload: res.data
	})

	console.log(res.data)
}
