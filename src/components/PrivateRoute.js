import React from 'react';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  // TODO: Implement authentication
  return <Component {...rest} />;
};

export default PrivateRoute;
