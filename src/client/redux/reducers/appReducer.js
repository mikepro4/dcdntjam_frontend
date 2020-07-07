import { assign } from "lodash";
import update from "immutability-helper";

export const initialState = {
	totalPixels: 0
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
