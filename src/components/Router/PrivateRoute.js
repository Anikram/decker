import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const jwt = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');
  return (
    <Route
      {...rest}
      render={(props) => (
        jwt
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );
};


export default PrivateRoute;
