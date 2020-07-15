import { assign } from "lodash";
import update from "immutability-helper";

import {
	PAGE_SEARCH_UPDATE_RESULTS,
	PAGE_SEARCH_COLLECTION_VIDEO_UPDATE,
	PAGE_SEARCH_COLLECTION_CLEAR
} from "../actions/types";

export const initialState = {
	collections: {
		videos: [],
		accounts: [],
		hardware: []
	}
};

export const pageSearchReducer = (state = initialState, action) => {
	switch (action.type) {
        case PAGE_SEARCH_COLLECTION_VIDEO_UPDATE:
			return assign({}, state, {
				results: action.payload
			});
		case PAGE_SEARCH_COLLECTION_CLEAR:
			return initialState
		default:
			return state;
	}
};
