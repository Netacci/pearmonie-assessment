import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/routes.js';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import Loader from './components/loader/Loader.jsx';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard.jsx'));
const Login = lazy(() => import('./pages/auth/Login.jsx'));

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
