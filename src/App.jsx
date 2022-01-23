// Import Own Components
import Pages                    from "./Pages";
import ThemeConfig              from "./Theme";
import GlobalStyles             from "./Theme/globalStyles";
import ScrollToTop              from "./Components/kit/ScrollToTop";
import { BaseOptionChartStyle } from "./Components/kit/charts/BaseOptionChart";

const App = () => (
	<ThemeConfig>
		<ScrollToTop />

		<GlobalStyles />

		<BaseOptionChartStyle />

		<Pages />
	</ThemeConfig>
);

export default App;
