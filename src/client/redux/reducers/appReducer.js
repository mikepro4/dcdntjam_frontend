import {
	FETCH_AUTH
} from "../actions/types";
import { action } from "popmotion";

export const initialState = {
	user:  {
		profile: null
	}
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
		default:
			return state;
	}
};
