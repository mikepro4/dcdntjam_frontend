import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "connected-react-router";
import { appReducer } from "./appReducer";
import { connectRouter } from "connected-react-router";
import { youtubeVideoSearch } from "./youtubeVideoSearch";
import { currentVideo } from "./currentVideo";
import { sliderNewVideoReducer } from "./sliderNewVideoReducer";
import { pageVideoReducer } from "./pageVideoReducer";
import { pageProfileReducer } from "./pageProfileReducer";
import { mainCollectionReducer } from "./mainCollectionReducer";
import { pageSearchReducer } from "./pageSearchReducer"
import { pageHomeReducer } from "./pageHomeReducer"
import playerReducer from "./playerReducer";


export default (history) => combineReducers({
	router: connectRouter(history),
	form: formReducer,
	app: appReducer,
	player: playerReducer,
	currentVideo: currentVideo,
	youtubeVideoSearch: youtubeVideoSearch,
	sliderNewVideo: sliderNewVideoReducer,
	mainCollection: mainCollectionReducer,
	pageVideo: pageVideoReducer,
	pageProfile: pageProfileReducer,
	pageSearch: pageSearchReducer,
	pageHome: pageHomeReducer
})
