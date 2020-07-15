import * as _ from "lodash";
import axios from "axios";

import {
    COLLECTION_CLEAR,
    COLLECTION_SEARCH,
    COLLECTION_SEARCH_SUCCESS,
    COLLECTION_UPDATE
} from "../actions/types";

import { reset, submit } from "redux-form";

// =============================================================================

export const collectionSearch = (
    url,
	criteria,
	sortProperty,
	offset = 0,
	limit = 20,
    success
) => async (dispatch, getState, api) => {

	dispatch({
        type: COLLECTION_SEARCH,
        offset,
		limit
	});

	const response = await api.post(url, {
		criteria,
		sortProperty,
		offset,
		limit,
	});

	dispatch({
		type: COLLECTION_SEARCH_SUCCESS,
		offset: response.data.offset,
		limit: response.data.limit,
		all: response.data.all,
		count: response.data.count
	});
	
	
	if(success) {
		success()
	}
};


// =============================================================================
	

export const collectionClear = () => dispatch => {
	dispatch({
		type: COLLECTION_CLEAR
	});
};


export const collectionUpdate = (type) => dispatch => {
	dispatch({
        type: COLLECTION_UPDATE,
        payload: type
	});
};
