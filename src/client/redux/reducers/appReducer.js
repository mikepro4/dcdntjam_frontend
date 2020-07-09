import {
	FETCH_AUTH,
	SCROLLING_UP,
	SCROLLING_DOWN,
	LOADING_START,
	LOADING_END,
	FETCH_USER
} from "../actions/types";
import { action } from "popmotion";

export const initialState = {
	user: null,
	scrollingDown: false,
	loading: false,
	externalUser: null
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
		default:
			return state;
	}
};
