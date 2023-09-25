import React, { useContext, useEffect } from "react";

import { Redirect, Route } from "react-router";
import AuthContext from "../context/auth.context";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
  exact,
}) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (loggedIn ? <Component /> : <Redirect to="/login" />)}
    />
  );
};
