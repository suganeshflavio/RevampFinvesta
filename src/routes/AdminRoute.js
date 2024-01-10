import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AdminLayout from 'layout/AdminLayout';
// import CreateGroup from 'views/utilities/CreateGroup';
// import AccessManagement from 'views/utilities/AccessManagement';
//  import MoneyTransfer from 'views/utilities/MoneyTransfer';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/AdminDashboard/Default')));

// utilities routing
const UtilsAccessManagement = Loadable(lazy(() => import('views/utilities/AccessManagement')));
const UtilsCreateGroup = Loadable(lazy(() => import('views/utilities/CreateGroup')));

const UtilsAddDataPoints = Loadable(lazy(() => import('views/utilities/DataPoints')));
const UtilsProductMaster = Loadable(lazy(() => import('views/utilities/ProductMaster')));
const UtilsAddProduct = Loadable(lazy(() => import('views/utilities/AddProduct')));

// const UtilsMoneyTransfer=Loadable(lazy(() => import('views/utilities/PopularServices')));

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoute = {

  path: '/',
  element: <AdminLayout />,
  children: [
    {
      path: '/Admin',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    {
      path: 'Admin',
      children: [
        {
          path: 'AddDP',
          element: <UtilsAddDataPoints />,
          breadcrumbs: true

        }
      ]
    },
    {
      path: 'Admin',
      children: [
        {
          path: 'ProductMaster',
          element: <UtilsProductMaster/>,
          breadcrumbs: true

        }
      ]
    },
    {
      path: 'Admin',
      children: [
        {
          path: 'AddProduct',
          element: <UtilsAddProduct/>,
          breadcrumbs: true

        }
      ]
    },

    {
      path: 'Admin',
      children: [
        {
          path: 'AccessManagement',
          element: <UtilsAccessManagement/>,
          breadcrumbs: true

        }
      ]
    },

    {
      path: 'Admin',
      children: [
        {
          path: 'CreateGroup',
          element: <UtilsCreateGroup/>,
          breadcrumbs: true

        }
      ]
    },
    
  ]
};

export default AdminRoute;
