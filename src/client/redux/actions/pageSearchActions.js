import * as _ from "lodash";

import {
    PAGE_SEARCH_TERM_UPDATE,
    PAGE_SEARCH_TAB_UPDATE,
    PAGE_SEARCH_SCROLL_UPDATE,
    PAGE_SEARCH_COLLECTION_CLEAR,
    PAGE_SEARCH_COLLECTION_VIDEO_UPDATE,
	PAGE_SEARCH_COLLECTION_VIDEO_APPEND,
    PAGE_SEARCH_COLLECTION_USERS_UPDATE,
	PAGE_SEARCH_COLLECTION_USERS_APPEND
} from "../actions/types";

// // =============================================================================

// Page Actions

export const collectionClear = () => async (dispatch, getState, api) => {
    dispatch({
		type: PAGE_SEARCH_COLLECTION_CLEAR
	})
}

export const searchTermUpdate = (searchTerm) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_TERM_UPDATE,
        payload: searchTerm
    })
}

export const tabUpdate = (tab) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_TAB_UPDATE,
        payload: tab
    })
}

export const scrollUpdate = (scroll) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_SCROLL_UPDATE,
        payload: scroll
    })
}

// // =============================================================================

// Collection Video

export const collectionVideoUpdate = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_COLLECTION_VIDEO_UPDATE,
        payload: collection
    })
}

export const collectionVideoAppend = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_COLLECTION_VIDEO_APPEND,
        payload: collection
    })
}

// // =============================================================================

// Collection User

export const collectionUsersUpdate = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_COLLECTION_USERS_UPDATE,
        payload: collection
    })
}

export const collectionUsersAppend = (collection) => async (dispatch, getState, api) => {
    dispatch({
        type: PAGE_SEARCH_COLLECTION_USERS_APPEND,
        payload: collection
    })
}





// export const loadVideoCollection = (channelId) => async (dispatch, getState, api) => {
//     const res = await api.post("/search/videos", 
//         {
//             criteria: {
//                 channelId: channelId
//             },
//             sortProperty: "created",
//             offset: 0,
//             limit: 20
//         }
//     );
    
//     dispatch({
// 		type: COLLECTION_SEARCH,
// 	})

// 	dispatch({
// 		type: COLLECTION_SEARCH_SUCCESS,
// 		payload: res.data
// 	})
// }

// export const clearVideoCollection = (channelId) => async (dispatch, getState, api) => {
//     dispatch({
// 		type: COLLECTION_SEARCH,
// 	})
// }


