import * as _ from "lodash";
import axios from "axios";

import {
    PROFILE_LOAD_MY_VIDEOS,
    PROFILE_LOAD_MY_VIDEOS_SUCCESS,
    PROFILE_CLEAR_MY_LOADED_VIDEOS,

    PROFILE_LOAD_MY_HARDWARE,
    PROFILE_LOAD_MY_HARDWARE_SUCCESS,
    PROFILE_CLEAR_MY_HARDWARE,

    PROFILE_LOAD_MY_SUBMISSIONS,
    PROFILE_LOAD_MY_SUBMISSIONS_SUCCESS,
    PROFILE_CLEAR_MY_SUBMISSIONS
} from "../actions/types";


// =============================================================================

export const profileLoadMyVideos = (channelId) => async (dispatch, getState, api) => {
    const res = await api.post("/search/videos", 
        {
            criteria: {
                channelId: channelId
            },
            sortProperty: {
                "created": -1
            },
            offset: 0,
            limit: 20
        }
    );
    
    dispatch({
		type: PROFILE_LOAD_MY_VIDEOS,
	})

	dispatch({
		type: PROFILE_LOAD_MY_VIDEOS_SUCCESS,
		payload: res.data
	})
}

export const profileClearMyVideos = () => dispatch => {
	dispatch({
		type: PROFILE_CLEAR_MY_LOADED_VIDEOS
	});
};
