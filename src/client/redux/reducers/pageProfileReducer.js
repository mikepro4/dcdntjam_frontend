import { assign } from "lodash";
import update from "immutability-helper";

import {
	PAGE_PROFILE_SCROLL_UPDATE,
	PAGE_PROFILE_TAB_UPDATE,
	PAGE_PROFILE_COLLECTION_CLEAR,
	PAGE_PROFILE_COLLECTION_VIDEO_UPDATE,
	PAGE_PROFILE_COLLECTION_VIDEO_APPEND
} from "../actions/types";

export const initialState = {
	scroll: 0,
	activeTab: 1,
	initial: true,
	tabs: [
		{
			title: "Videos",
			id: 1
		},
		{
			title: "Hardware",
			id: 2
		},
		{
			title: "Reposts",
			id: 3
		}
	],
	videos: {
		url: "/search/videos",
		collection: {}
	},

	hardware: {
		url: "/search/hardware",
		collection: {}
	},

	reposts: {
		url: "/search/videos",
		collection: {}
	}
};

export const pageProfileReducer = (state = initialState, action) => {
	switch (action.type) {

		/////// PAGE  ACTIONS

		case PAGE_PROFILE_SCROLL_UPDATE:
			return {
				...state,
				scroll: action.payload
			}

		case PAGE_PROFILE_TAB_UPDATE:
			return {
				...state,
				activeTab: action.payload
			}
			
		case PAGE_PROFILE_COLLECTION_CLEAR:
			return initialState

		//////// VIDEO COLLECTION ACTIONS

        case PAGE_PROFILE_COLLECTION_VIDEO_UPDATE:
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
				videos: newVideos,
				initial: false
			}

		case PAGE_PROFILE_COLLECTION_VIDEO_APPEND:
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
		default:
			return state;
	}
};
