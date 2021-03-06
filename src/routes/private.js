import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, exact, component }) => {
  const authenticated = useSelector(state => state.authenticateReducer.authenticated);

  return authenticated ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/acessar" />
  );
};
export default PrivateRoute;
