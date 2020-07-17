import { assign } from "lodash";
import update from "immutability-helper";

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

export const initialState = {
	videos: {},
	hardware: [],
	submissions: null,
	isFetching: false,
};

export const pageProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_LOAD_MY_VIDEOS:
			return assign({}, state, {
				isFetching: true
			});
		case PROFILE_LOAD_MY_VIDEOS_SUCCESS:
			return assign({}, state, {
				videos: action.payload,
				isFetching: false
            });
        case PROFILE_CLEAR_MY_LOADED_VIDEOS:
            return assign({}, state, {
                videos: {},
                isFetching: false
            });
		default:
			return state;
	}
};
