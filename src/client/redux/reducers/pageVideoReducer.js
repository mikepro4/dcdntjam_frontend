import { assign } from "lodash";
import update from "immutability-helper";

import {
    LOAD_VIDEO,
    LOAD_VIDEO_SUCCESS,
    CLEAR_PAGE_VIDEO
} from "../actions/types";

export const initialState = {
	singleVideo: {},
	tracks: [],
	hoverTime: null,
	selectedClip: null,
	isFetching: false,
	isFetchingTracks: false
};

export const pageVideoReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO:
			return assign({}, state, {
				isFetching: true
			});
		case LOAD_VIDEO_SUCCESS:
			return assign({}, state, {
				singleVideo: action.payload,
				isFetching: false
            });
        case CLEAR_PAGE_VIDEO:
            return assign({}, state, {
                singleVideo: {},
                isFetching: false
            });
		default:
			return state;
	}
};
