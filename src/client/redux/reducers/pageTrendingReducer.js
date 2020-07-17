import { assign } from "lodash";

import {
	PAGE_TRENDING_SCROLL_UPDATE,
	PAGE_TRENDING_COLLECTION_CLEAR,
	PAGE_TRENDING_COLLECTION_UPDATE,
	PAGE_TRENDING_COLLECTION_APPEND
} from "../actions/types";

export const initialState = {
	scroll: 0,
	activeTab: 1,
	tabs: [],
	trending: {
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

export const pageTrendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case PAGE_TRENDING_SCROLL_UPDATE:
			return {
				...state,
				scroll: action.payload
			}

        //////// FEED COLLECTION ACTIONS

		case PAGE_TRENDING_COLLECTION_UPDATE:
			let newFeedUpdate = {
				...state.trending,
				collection: {
					...state.trending.collection,
					all: action.payload.all,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}

			return {
				...state,
				trending: newFeedUpdate
            }
    
        case PAGE_TRENDING_COLLECTION_APPEND:
            let newFeedAppend = state.trending.collection.all.concat(action.payload.all);
            let adjustedFeedCollection = {
                ...state.trending,
                collection: {
                    ...state.trending.collection,
                    all: newFeedAppend,
                    offset: action.payload.offset,
                    limit: action.payload.limit,
                    count: action.payload.count
                }
            }
            return {
                ...state,
                trending: adjustedFeedCollection
            }

        case PAGE_TRENDING_COLLECTION_CLEAR:
            return initialState
		default:
			return state;
	}
};
