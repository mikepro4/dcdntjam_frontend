import * as _ from "lodash";
import axios from "axios";

import {
	FETCH_AUTH,
	SCROLLING_UP,
	SCROLLING_DOWN
} from "../actions/types";

// =============================================================================

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const res = await api.get("/current_user");

	dispatch({
		type: FETCH_AUTH,
		payload: res.data
	})
}


export const scrollingUp = () => async (dispatch, getState, api) => {
	dispatch({
		type: SCROLLING_UP
	})
}

export const scrollingDown = () => async (dispatch, getState, api) => {
	dispatch({
		type: SCROLLING_DOWN
	})
}