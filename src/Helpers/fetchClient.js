/* eslint-disable no-async-promise-executor */
import AuthActions from "Store/Actions/AuthActions";
import { Store }   from "Store";
import apiUrl      from "./apiUrl";

/**
 * Logs the user out if the api returns a 401 http status code
 *
 * @author Andres Vargas <andres.campo92@gmail.com>
 */
const fetchClient = (url, options) => new Promise( async (resolve, reject) => {
	try {
		const { token, ...restOfOptions } = options;

		const response = await fetch(apiUrl + url, {
			method : "GET",
			...restOfOptions,
			...(
				token ? {
					headers : {
						"Authorization" : `Bearer ${token}`,
					},
				} : {}
			),
		});

		if (response.status === 401) {
			Store.dispatch(AuthActions.clearUserData());
			reject();
		}

		return resolve(response);
	} catch (error) {
		console.log("[fetchClient.js] ", error);
		reject();
	}
});

export default fetchClient;
