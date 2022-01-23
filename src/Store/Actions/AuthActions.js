// Import Own Components
import {
	SET_USER_DATA,
	CLEAR_USER_DATA,
} from "Store/constants";

const setUserData   = payload => ({ type : SET_USER_DATA, payload });
const clearUserData = payload => ({ type : CLEAR_USER_DATA, payload });

const AuthActions = {
	setUserData,
	clearUserData,
};

export default AuthActions;
