// Import Own Components
import AuthActions     from "Store/Actions/AuthActions";
import { fetchClient } from "Helpers";

const login = (email, password) => async (dispatch, getState) => {
	try {
		const body = new FormData();

		body.append("email", email);
		body.append("password", password);

		const response = await fetchClient("/auth/login", {
			method : "POST",
			body,
		});

		if (!response.ok) {
			return response.status;
		}

		const { token, userData } = await response.json();

		dispatch(AuthActions.setUserData({
			token,
			userData,
		}));
	} catch (err) {
		console.error("[AuthService.login] ", err);

		return false;
	}
};

const AuthService = {
	login,
};

export default AuthService;
