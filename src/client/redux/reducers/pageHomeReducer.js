import { assign } from "lodash";

import {
	PAGE_HOME_TAB_UPDATE,
	PAGE_HOME_SCROLL_UPDATE,
	PAGE_HOME_COLLECTION_CLEAR,
	PAGE_HOME_COLLECTION_FEED_UPDATE,
	PAGE_HOME_COLLECTION_FEED_APPEND
} from "../actions/types";

export const initialState = {
	scroll: 0,
	searchTerm: null,
	activeTab: 1,
	tabs: [],
	feed: {
		url: "/search/videos",
		criteria: {},
		collection: {},
		settings: {
			order: {
				label: "DESC",
				value: -1,
			},
			sortProperty: {
				label: "Date Created",
				value: "created"
			},
		}
	}
};

export const pageHomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case PAGE_HOME_SCROLL_UPDATE:
			return {
				...state,
				scroll: action.payload
			}
		case PAGE_HOME_TAB_UPDATE:
			return {
                ...state,
                activeTab: action.payload
            }


        //////// FEED COLLECTION ACTIONS

		case PAGE_HOME_COLLECTION_FEED_UPDATE:
			let newFeedUpdate = {
				...state.feed,
				collection: {
					...state.feed.collection,
					all: action.payload.all,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}

			return {
				...state,
				feed: newFeedUpdate
            }
    
        case PAGE_HOME_COLLECTION_FEED_APPEND:
            let newFeedAppend = state.feed.collection.all.concat(action.payload.all);
            let adjustedFeedCollection = {
                ...state.feed,
                collection: {
                    ...state.feed.collection,
                    all: newFeedAppend,
                    offset: action.payload.offset,
                    limit: action.payload.limit,
                    count: action.payload.count
                }
            }
            return {
                ...state,
                feed: adjustedFeedCollection
            }

        case PAGE_HOME_COLLECTION_CLEAR:
            return initialState
		default:
			return state;
	}
};
