import { Suspense, lazy } from "react";
import {
	Navigate,
	Route,
	Routes,
} from "react-router-dom";

// Import Own Components
import {
	Loader,
	PrivateRoute,
	SessionFreeRoute,
} from "Helpers";

// Layouts
const DashboardLayout = lazy(() => import("Layouts/dashboard"));
const LogoOnlyLayout  = lazy(() => import("Layouts/LogoOnlyLayout"));

// Pages
const LoginPage    = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));
const UsersPage    = lazy(() => import("./UsersPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const Pages = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<Navigate to="/dashboard/users" />} />

				<Route path="users" element={<PrivateRoute component={UsersPage} />} />

				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Route>

			<Route path="/" element={<LogoOnlyLayout />}>
				<Route index element={<Navigate to="/dashboard" />} />

				<Route path="login" element={<SessionFreeRoute component={LoginPage} />} />

				<Route path="register" element={<SessionFreeRoute component={RegisterPage} />} />

				<Route path="*" element={<NotFoundPage />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	</Suspense>
);

export default Pages;
