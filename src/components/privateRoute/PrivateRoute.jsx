/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('pear-token');

  if (!token) {
    return <Navigate to={ROUTES.login} />;
  }
  return children;
};

export default PrivateRoute;
