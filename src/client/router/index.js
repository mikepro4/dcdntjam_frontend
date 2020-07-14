import React from "react";
import App from "../App";
import Home from "../react/pages/home";
import Profile from "../react/pages/profile";
import Video from "../react/pages/video";

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
