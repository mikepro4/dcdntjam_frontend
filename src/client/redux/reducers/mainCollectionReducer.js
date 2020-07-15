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
    collection: {
        fetching: false,
        offset: 0,
        limit: 20,
        count: null,
        all: []
	},
    settings: {
        order: {
            label: "DESC",
            value: -1,
        },
        sortProperty: {
            label: "Date Created",
            value: "created"
        },
        offset: 0,
        limit: 0
    },
    type: null
};

export const mainCollectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case COLLECTION_SEARCH: {
			let updatedResults = assign({}, state.collection, {
				fetching: true,
				offset: action.offset,
				limit: action.limit
			});
			return assign({}, state, {
				collection: updatedResults
			});
		}

		case COLLECTION_SEARCH_SUCCESS: {
			let newArray = state.collection.all.concat(action.all);

			let updatedResults = assign({}, state.collection, {
				fetching: false,
				offset: action.offset,
				limit: action.limit,
				count: action.count,
				all: newArray
			});
			return assign({}, state, {
				collection: updatedResults
			});
        }

        case COLLECTION_CLEAR: {
			return initialState
        }
        
        case COLLECTION_UPDATE: {
			return assign({}, state, {
				type: action.payload
			});
		}

		case COLLECTION_SETTINGS_UPDATE:
            let newColelctionSettings = _.merge({}, state.settings, {
                [action.prop]: action.payload
            })
            return {
                ...state,
                settings: newColelctionSettings
		}

		default:
			return state;
	}
};
