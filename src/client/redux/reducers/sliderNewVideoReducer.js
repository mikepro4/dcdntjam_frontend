import {
	LOAD_CHANNEL_INFO
} from "../actions/types";

export const initialState = {
	channelInfo: null
};

export const sliderNewVideoReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_CHANNEL_INFO:
			return {
				...state,
				channelInfo:  action.payload
			}
		default:
			return state;
	}
};
