import React from "react";
import App from "../App";
import Home from "../react/pages/home";
import Profile from "../react/pages/profile";
import Video from "../react/pages/video";
import Search from "../react/pages/search";
import Trending from "../react/pages/trending";

export default [
	{
		...App,
		routes: [
			{
				...Home,
				path: "/",
				exact: true,
				params: {
					name: "home"
				},

			},
			{
				...Search,
				path: "/search",
				exact: true,
				params: {
					name: "search"
				}
			},
			{
				...Trending,
				path: "/trending",
				exact: true,
				params: {
					name: "trending"
				}
			},
			{
				...Profile,
				path: "/:customUrl",
				exact: true,
				params: {
					name: "profile_customurl"
				}
			},
			{
				...Profile,
				path: "/profile/:googleId",
				params: {
					name: "profile"
				}
			},
			{
				...Video,
				path: "/video/:googleId",
				params: {
					name: "video"
				}
			},
			{
				...Profile,
				path: "/profile",
				exact: true,
				params: {
					name: "profile-empty"
				}
			}
			
		]
	}
];
