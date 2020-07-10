import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "connected-react-router";
import { appReducer } from "./appReducer";
import { connectRouter } from "connected-react-router";
import { youtubeVideoSearch } from "./youtubeVideoSearch";
import { currentVideo } from "./currentVideo";
import playerReducer from "./playerReducer";


export default (history) => combineReducers({
	router: connectRouter(history),
	form: formReducer,
	app: appReducer,
	player: playerReducer,
	currentVideo: currentVideo,
	youtubeVideoSearch: youtubeVideoSearch
})
