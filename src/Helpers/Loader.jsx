import { useEffect } from "react";
import nprogress     from "nprogress";

const Loader = () => {
	useEffect(() => {
		nprogress.start();

		return () => {
			nprogress.done();
		};
	}, []);

	return null;
};

export default Loader;
