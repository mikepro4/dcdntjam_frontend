import React from "react";
import App from "../App";
import Home from "../react/pages/home";
import Profile from "../react/pages/profile";

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
				path: "/profile/:googleId",
				params: {
					name: "profile"
				}
			},
			,
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
