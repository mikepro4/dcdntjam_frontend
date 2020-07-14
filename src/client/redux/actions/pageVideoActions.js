import * as _ from "lodash";
import axios from "axios";

import {
    LOAD_VIDEO,
    LOAD_VIDEO_SUCCESS
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
}