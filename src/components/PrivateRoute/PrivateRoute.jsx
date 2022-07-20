import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/authorization';

export default function PrivateRoute({
  navigateTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {!isLoggedIn && <Navigate to={navigateTo} />}
    </Route>
  );
}
