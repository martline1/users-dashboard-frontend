// Import Own Components
import {
	SET_USER_DATA,
	CLEAR_USER_DATA,
} from "Store/constants";

const initialState = {
	loggedIn : false,
	token    : "",
	userData : {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			const { token, userData } = action.payload;

			return {
				loggedIn : true,
				token,
				userData,
			};
		}
		case CLEAR_USER_DATA:
			return { ...initialState };
		default:
			return state;
	}
};

export default authReducer;
