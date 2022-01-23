import { connect }  from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
	loggedIn,
	component : Component,
	...rest
}) => {
	if (!loggedIn) return <Navigate to="/login" />;

	return <Component {...rest} />;
};

const mapStateToProps = ({ _authReducer }) => ({
	loggedIn : _authReducer?.loggedIn ?? false,
});

export default connect(mapStateToProps)(PrivateRoute);
