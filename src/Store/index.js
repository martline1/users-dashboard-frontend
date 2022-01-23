import { createStore, applyMiddleware } from "redux";
import thunk                            from "redux-thunk";
import localForage                      from "localforage";
import { composeWithDevTools }          from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";

// Import Own Components
import rootReducer from "./Reducers";

const persistConfig = {
	key       : "root",
	storage   : localForage,
	whitelist : ["_authReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProduction = process.env.NODE_ENV === "production";

export const Store = createStore(
	persistedReducer,
	isProduction
		? applyMiddleware(thunk)
		: composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(Store);

export default Store;
