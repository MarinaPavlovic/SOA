import React, { useState } from "react";

const AuthContext = React.createContext({
	token: undefined,
	id: undefined,
	role: undefined,
	username: undefined,
	isLoggedIn: false,
	login: (token, id, role) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(undefined);
	const [id, setId] = useState(0);
	const [role, setRole] = useState(undefined);
	const [username, setUsername] = useState(undefined);

	const loginHandler = (token, id, role, username) => {
		setToken(token);
		setId(id);
		setRole(role);
		setUsername(username);
	};

	const logoutHandler = () => {
		setToken(undefined);
		setId(0);
		setRole(undefined);
		setUsername(undefined);
	};

	const contextValue = {
		token: token,
		id: id,
		role: role,
		username: username,
		isLoggedIn: !!token,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
