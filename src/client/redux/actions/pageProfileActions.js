import * as _ from "lodash";
import axios from "axios";

import {
	PAGE_PROFILE_SCROLL_UPDATE,
    PAGE_PROFILE_TAB_UPDATE,
    PAGE_PROFILE_COLLECTION_CLEAR,
	PAGE_PROFILE_COLLECTION_VIDEO_UPDATE,
	PAGE_PROFILE_COLLECTION_VIDEO_APPEND
} from "../actions/types";

// =============================================================================

// Page Actions

export const collectionClear = () => async (dispatch, getState, api) => {
    dispatch({
		type: PAGE_PROFILE_COLLECTION_CLEAR
	})
}

export const tabUpdate = (tab) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_PROFILE_TAB_UPDATE,
        payload: tab
    })
}

export const scrollUpdate = (scroll) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_PROFILE_SCROLL_UPDATE,
        payload: scroll
    })
}

// // =============================================================================

// Collection Video

export const collectionVideoUpdate = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_PROFILE_COLLECTION_VIDEO_UPDATE,
        payload: collection
    })
}

export const collectionVideoAppend = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_PROFILE_COLLECTION_VIDEO_APPEND,
        payload: collection
    })
}

// // =============================================================================


