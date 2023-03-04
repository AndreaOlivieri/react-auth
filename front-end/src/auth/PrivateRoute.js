import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};
