import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/SignIn')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3')));
const PopularService=Loadable(lazy(() => import('views/utilities/PopularServices')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <AuthRegister3 />

    },
    {
      path: '/Login',
      element: <AuthLogin3 />
    },
    {
      path:'/recharge',
      element:<PopularService/>,
      breadcrumbs: true

    }
  ]
};

export default AuthenticationRoutes;
