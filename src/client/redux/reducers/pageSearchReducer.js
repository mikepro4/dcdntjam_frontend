import { assign } from "lodash";
import update from "immutability-helper";

import {
	PAGE_SEARCH_UPDATE_RESULTS,
} from "../actions/types";

export const initialState = {
	results: null
};

export const pageSearchReducer = (state = initialState, action) => {
	switch (action.type) {
        case PAGE_SEARCH_UPDATE_RESULTS:
			return assign({}, state, {
				results: action.payload
			});
		default:
			return state;
	}
};
