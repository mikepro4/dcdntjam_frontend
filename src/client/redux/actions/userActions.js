import * as _ from "lodash";
import axios from "axios";

import {
    FETCH_USER,
    LOADING_START,
    LOADING_END
} from "../actions/types";


/////////////////////////////////////////////////

export const fetchUser = (googleId, success) => async (
	dispatch,
	getState,
	api
) => {
    const response = await api.post("/user", {
        googleId: googleId
    });
    dispatch({
		type: LOADING_START
	});
	dispatch({
		type: FETCH_USER,
		payload: response.data
    });
    
    if(response){
        dispatch({
            type: LOADING_END
        });
    }
	if (success) {
		success();
	}
};