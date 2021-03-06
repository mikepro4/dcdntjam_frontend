import moment from "moment";
import {
	LOAD_YOUTUBE_VIDEO_DETAILS,
	LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS,
	CLEAR_LOADED_VIDEO,
	CURRENT_VIDEO_UPDATE
} from "./types";

export const loadYoutubeVideoDetails = (googleId, accessToken, success) => async (
	dispatch,
	getState,
	api
) => {
	dispatch({
		type: LOAD_YOUTUBE_VIDEO_DETAILS
	});
	const response = await api.post("/youtube_video_details", {
		googleId
	});
	// const channelId = await api.post("/get_channel_id", {
	// 	accessToken: accessToken
	// });
	// console.log(channelId)
	dispatch({
		type: LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS,
		payload: response.data
	});

	dispatch({
		type: CURRENT_VIDEO_UPDATE,
		payload: googleId,
		playerAction: "stop"
	});
	
	if(success) {
		success();
	}
};

export const clearLoadedYoutubeVideo = () => dispatch => {
	dispatch({
		type: CLEAR_LOADED_VIDEO
	});
};

export const addYoutubeVideo = (video, history, success) => async (
	dispatch,
	getState,
	api
) => {
	const response = await api.post("/youtube_video_add", {
		googleId: video.googleId,
		channelId: video.channelId,
		snippet: video.snippet,
		contentDetails: video.contentDetails,
		channelAvatar: video.channelAvatar,
		userId: video.userId
	});
	handleAddedVideo(response, history, success);
};

function handleAddedVideo(response, history, success) {
	history.push(`/video/${response.data.googleId}`);
	success();
}
