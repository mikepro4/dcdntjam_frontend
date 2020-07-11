import {
	FETCH_AUTH,
	SCROLLING_UP,
	SCROLLING_DOWN,
	LOADING_START,
	LOADING_END,
	FETCH_USER,
	UPDATE_RIGHT_SLIDER,
	UPDATE_BOTTOM_SLIDER,
	CLEAR_RIGHT_SLIDER,
	CLEAR_BOTTOM_SLIDER,
	HIDE_BOTTOM_SLIDER,
	UPDATE_TOKEN
} from "../actions/types";
import { action } from "popmotion";

export const initialState = {
	user: null,
	scrollingDown: false,
	loading: false,
	externalUser: null,
	rightSlider: null,
	bottomSlider: null,
	hideBottomSlider: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AUTH:
			return {
				...state,
				user:  action.payload
			}
		case SCROLLING_UP:
			return {
				...state,
				scrollingDown: null
			}
		case LOADING_START:
			return {
				...state,
				loading: true
			}
		case LOADING_END:
			return {
				...state,
				loading: false
			}
		case SCROLLING_DOWN:
			return {
				...state,
				scrollingDown: true
			}
		case FETCH_USER:
			return {
				...state,
				externalUser: action.payload
			}
		case UPDATE_RIGHT_SLIDER:
			return {
				...state,
				rightSlider: action.payload
			}
		case UPDATE_BOTTOM_SLIDER:
			return {
				...state,
				bottomSlider: action.payload
			}
		case CLEAR_RIGHT_SLIDER:
			return {
				...state,
				rightSlider: null
			}
		case CLEAR_BOTTOM_SLIDER:
			return {
				...state,
				bottomSlider: null
			}

		case HIDE_BOTTOM_SLIDER:
			return {
				...state,
				hideBottomSlider: action.payload
			}
		default:
			return state;
	}
};
