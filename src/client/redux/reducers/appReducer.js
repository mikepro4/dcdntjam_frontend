import {
	FETCH_AUTH,
	SCROLLING_UP,
	SCROLLING_DOWN
} from "../actions/types";
import { action } from "popmotion";

export const initialState = {
	user:  {
		profile: null
	},
	scrollingDown: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AUTH:
			let newUser = state.user 

			newUser.profile = action.payload

			return {
				...state,
				user: newUser
			}
		case SCROLLING_UP:
			return {
				...state,
				scrollingDown: null
			}
		case SCROLLING_DOWN:
			return {
				...state,
				scrollingDown: true
			}
		default:
			return state;
	}
};
