import { assign, merge, difference, findIndex } from "lodash";
import update from "immutability-helper";

import {
    COLLECTION_CLEAR,
    COLLECTION_SEARCH,
    COLLECTION_SEARCH_SUCCESS,
	COLLECTION_UPDATE,
	COLLECTION_SETTINGS_UPDATE
} from "../actions/types";

export const initialState = {
        fetching: false,
        offset: 0,
        limit: 20,
        count: null,
        all: []
};

export const mainCollectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case COLLECTION_SEARCH: {
			let updatedResults = assign({}, state.collection, {
				fetching: true,
				offset: action.offset,
				limit: action.limit
			});
			return assign({}, state, updatedResults);
		}

		case COLLECTION_SEARCH_SUCCESS: {
			// let newArray = state.collection.all.concat(action.all);

			let updatedResults = assign({}, state.collection, {
				fetching: false,
				offset: action.offset,
				limit: action.limit,
				count: action.count,
				all: action.all
			});
			return assign({}, state, updatedResults);
        }

        case COLLECTION_CLEAR: {
			return initialState
        }
        
		default:
			return state;
	}
};
