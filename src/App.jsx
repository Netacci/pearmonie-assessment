import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import PrivateRoute from './components/privateRoute/privateRoute';
import Loader from './components/loader/Loader';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Login = lazy(() => import('./pages/auth/Login'));

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.login}
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.dashboard}
          element={
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
