import * as _ from "lodash";
import axios from "axios";

import {
	FETCH_AUTH,
	SCROLLING_UP,
	SCROLLING_DOWN,
	UPDATE_RIGHT_SLIDER,
	UPDATE_BOTTOM_SLIDER,
	CLEAR_RIGHT_SLIDER,
	CLEAR_BOTTOM_SLIDER,
	HIDE_BOTTOM_SLIDER,
	CURRENT_VIDEO_UPDATE,
	RESET_INITIAL
} from "../actions/types";

import { reset, submit } from "redux-form";

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

/////////////////////////////////////////////////

export const updateUser = (user, success) => async (
	dispatch,
	getState,
	api
) => {
	const response = await api.post("/user/update", user);
	dispatch({
		type: FETCH_AUTH,
		payload: response.data
	});
	if (success) {
		success();
	}
};

/////////////////////////////////////////////////

export const updateRightSlider = (slider) => async (dispatch, getState, api) => {
	dispatch({
		type: UPDATE_RIGHT_SLIDER,
		payload: slider
	})
}

export const updateBottomSlider= (slider) => async (dispatch, getState, api) => {
	dispatch({
		type: UPDATE_BOTTOM_SLIDER,
		payload: slider
	})
}

export const clearRightSlider = (slider) => async (dispatch, getState, api) => {
	dispatch({
		type: CLEAR_RIGHT_SLIDER,
		payload: slider
	})
}

export const clearBottomSlider= (slider) => async (dispatch, getState, api) => {
	dispatch({
		type: CLEAR_BOTTOM_SLIDER,
		payload: slider
	})
}

export const hideBottomSlider= (status) => async (dispatch, getState, api) => {
	dispatch({
		type: HIDE_BOTTOM_SLIDER,
		payload: status
	})
}

/////////////////////////////////////////////////


export const resetForm = formName => dispatch => {
	dispatch(reset(formName));
};

export const submitForm = formName => dispatch => {
	dispatch(submit(formName));
};

/////////////////////////////////////////////////

export const updateCurrentVideo = (id, action, initial) => dispatch => {
	dispatch({
		type: CURRENT_VIDEO_UPDATE,
		payload: id,
		playerAction: action,
		initial: initial
	});
};

export const resetInitial = () => dispatch => {
	dispatch({
		type: RESET_INITIAL,
		initial: false
	});
};

/////////////////////////////////////////////////

export const updateToken = (refreshToken, success) => async (
	dispatch,
	getState,
	api
) => {
	const response = await api.post("/update_token", {
		refreshToken: refreshToken
	});
	dispatch({
		type: FETCH_AUTH,
		payload: response.data
	});
	if (success) {
		success();
	}
};
