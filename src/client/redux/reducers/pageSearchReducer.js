import { assign } from "lodash";

import {
	PAGE_SEARCH_TAB_UPDATE,
	PAGE_SEARCH_TERM_UPDATE,
	PAGE_SEARCH_SCROLL_UPDATE,
	PAGE_SEARCH_COLLECTION_CLEAR,
	PAGE_SEARCH_COLLECTION_USERS_UPDATE,
	PAGE_SEARCH_COLLECTION_USERS_APPEND,
	PAGE_SEARCH_COLLECTION_VIDEO_UPDATE,
	PAGE_SEARCH_COLLECTION_VIDEO_APPEND,
} from "../actions/types";

export const initialState = {
	scroll: 0,
	searchTerm: null,
	activeTab: 1,
	tabs: [
		{
			title: "Videos",
			id: 1
		},
		{
			title: "Channels",
			id: 2
		},
		{
			title: "Hardware",
			id: 3
		}
	],
	videos: {
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
	},
	users: {
		url: "/search/users",
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
			}
		},
	},
	hardware: {
		url: "/search/hardware",
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
		},
	},
};

export const pageSearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case PAGE_SEARCH_SCROLL_UPDATE:
			return {
				...state,
				scroll: action.payload
			}
		case PAGE_SEARCH_TERM_UPDATE:
			return {
				...state,
				searchTerm: action.payload
			}
		case PAGE_SEARCH_TAB_UPDATE:
			return assign({}, state, {
				activeTab: action.payload
			});

		//////// VIDEO COLLECTION ACTIONS

        case PAGE_SEARCH_COLLECTION_VIDEO_UPDATE:
			let newVideos = {
				...state.videos,
				collection: {
					...state.videos.collection,
					all: action.payload.all,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}

			return {
				...state,
				videos: newVideos
			}
		case PAGE_SEARCH_COLLECTION_VIDEO_APPEND:
			let newAll = state.videos.collection.all.concat(action.payload.all);
			let adjustedCollection = {
				...state.videos,
				collection: {
					...state.videos.collection,
					all: newAll,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}
			return {
				...state,
				videos: adjustedCollection
			}

		//////// USERS COLLECTION ACTIONS

		case PAGE_SEARCH_COLLECTION_USERS_UPDATE:
			let newUsersUpdate = {
				...state.users,
				collection: {
					...state.users.collection,
					all: action.payload.all,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}

			return {
				...state,
				users: newUsersUpdate
			}

		case PAGE_SEARCH_COLLECTION_USERS_APPEND:
			let newUsersAppend = state.users.collection.all.concat(action.payload.all);
			let adjustedUsersCollection = {
				...state.users,
				collection: {
					...state.users.collection,
					all: newUsersAppend,
					offset: action.payload.offset,
					limit: action.payload.limit,
					count: action.payload.count
				}
			}
			return {
				...state,
				users: adjustedUsersCollection
			}
		case PAGE_SEARCH_COLLECTION_CLEAR:
			return initialState
		default:
			return state;
	}
};
