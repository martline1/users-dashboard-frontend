import { connect }  from "react-redux";
import { Navigate } from "react-router-dom";

const SessionFreeRoute = ({
	loggedIn,
	component : Component,
	...rest
}) => {
	if (loggedIn) return <Navigate to="/dashboard" />;

	return <Component {...rest} />;
};

const mapStateToProps = ({ _authReducer }) => ({
	loggedIn : _authReducer?.loggedIn ?? false,
});

export default connect(mapStateToProps)(SessionFreeRoute);
