import * as _ from "lodash";

import {
    PAGE_HOME_TAB_UPDATE,
    PAGE_HOME_SCROLL_UPDATE,
    PAGE_HOME_COLLECTION_CLEAR,
    PAGE_HOME_COLLECTION_FEED_UPDATE,
	PAGE_HOME_COLLECTION_FEED_APPEND
} from "../actions/types";

// // =============================================================================

// Page Actions

export const collectionClear = () => async (dispatch, getState, api) => {
    dispatch({
		type: PAGE_HOME_COLLECTION_CLEAR
	})
}

export const tabUpdate = (tab) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_HOME_TAB_UPDATE,
        payload: tab
    })
}

export const scrollUpdate = (scroll) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_HOME_SCROLL_UPDATE,
        payload: scroll
    })
}

// // =============================================================================

// Collection Feed

export const collectionFeedUpdate = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_HOME_COLLECTION_FEED_UPDATE,
        payload: collection
    })
}

export const collectionFeedAppend = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_HOME_COLLECTION_FEED_APPEND,
        payload: collection
    })
}






