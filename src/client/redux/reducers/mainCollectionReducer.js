import { assign, merge, difference, findIndex } from "lodash";
import update from "immutability-helper";

import {
    COLLECTION_CLEAR,
    COLLECTION_SEARCH,
    COLLECTION_SEARCH_SUCCESS,
    COLLECTION_UPDATE
} from "../actions/types";

export const initialState = {
    searchResults: {
        fetching: false,
        offset: 0,
        limit: 20,
        count: null,
        all: []
    },
    type: null
};

export const mainCollectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case COLLECTION_SEARCH: {
			let updatedResults = assign({}, state.searchResults, {
				fetching: true,
				offset: action.offset,
				limit: action.limit
			});
			return assign({}, state, {
				searchResults: updatedResults
			});
		}

		case COLLECTION_SEARCH_SUCCESS: {
			let newArray = state.searchResults.all.concat(action.all);

			let updatedResults = assign({}, state.searchResults, {
				fetching: false,
				fetchingMore: false,
				offset: action.offset,
				limit: action.limit,
				count: action.count,
				all: newArray
			});
			return assign({}, state, {
				searchResults: updatedResults
			});
        }

        case COLLECTION_CLEAR: {
			return assign({}, state, {
				searchResults: {
                    fetching: false,
                    fetchingMore: false,
                    offset: 0,
                    limit: 20,
                    count: null,
                    all: []
                },
                type: null
			});
        }
        
        case COLLECTION_UPDATE: {
			return assign({}, state, {
				type: action.payload
			});
		}

		default:
			return state;
	}
};
