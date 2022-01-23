import { render }         from "react-dom";
import { PersistGate }    from "redux-persist/integration/react";
import nprogress          from "nprogress";
import { Provider }       from "react-redux";
import { BrowserRouter }  from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "simplebar/src/simplebar.css";
import "nprogress/nprogress.css";

// Import Own Components
import App                  from "./App.jsx";
import { Loader }           from "./Helpers";
import { persistor, Store } from "./Store";
import * as serviceWorker   from "./serviceWorker";

nprogress.configure({ showSpinner : false });

render(
	<Provider store={Store}>
		<PersistGate loading={<Loader />} persistor={persistor}>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
	serviceWorker.register();
} else {
	serviceWorker.unregister();
}
