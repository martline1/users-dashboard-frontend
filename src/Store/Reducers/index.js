import { combineReducers } from "redux";

// Import Own Components
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	_authReducer : authReducer,
});

export default rootReducer;
