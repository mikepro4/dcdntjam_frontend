import * as _ from "lodash";

import {
    PAGE_TRENDING_SCROLL_UPDATE,
	PAGE_TRENDING_COLLECTION_CLEAR,
	PAGE_TRENDING_COLLECTION_UPDATE,
	PAGE_TRENDING_COLLECTION_APPEND
} from "../actions/types";

// // =============================================================================

// Page Actions

export const collectionClear = () => async (dispatch, getState, api) => {
    dispatch({
		type: PAGE_TRENDING_COLLECTION_CLEAR
	})
}


export const scrollUpdate = (scroll) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_TRENDING_SCROLL_UPDATE,
        payload: scroll
    })
}

// // =============================================================================

// Collection Feed

export const collectionUpdate = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_TRENDING_COLLECTION_UPDATE,
        payload: collection
    })
}

export const collectionAppend = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_TRENDING_COLLECTION_APPEND,
        payload: collection
    })
}






