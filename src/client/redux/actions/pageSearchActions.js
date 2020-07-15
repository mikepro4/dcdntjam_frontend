import * as _ from "lodash";
import axios from "axios";

import {
    LOAD_VIDEO,
    LOAD_VIDEO_SUCCESS,
	CLEAR_PAGE_VIDEO,
	CURRENT_VIDEO_UPDATE
} from "../actions/types";

import { reset, submit } from "redux-form";

// // =============================================================================

export const loadVideoCollection = (channelId) => async (dispatch, getState, api) => {
    const res = await api.post("/search/videos", 
        {
            criteria: {
                channelId: channelId
            },
            sortProperty: "created",
            offset: 0,
            limit: 20
        }
    );
    
    dispatch({
		type: COLLECTION_SEARCH,
	})

	dispatch({
		type: COLLECTION_SEARCH_SUCCESS,
		payload: res.data
	})
}

export const clearVideoCollection = (channelId) => async (dispatch, getState, api) => {
    dispatch({
		type: COLLECTION_SEARCH,
	})
}
