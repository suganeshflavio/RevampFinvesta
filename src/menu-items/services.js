// assets
import { IconPackage } from '@tabler/icons';

// constant
const icons = { IconPackage };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const services = {
  id: 'dashboard',
  title: 'services',
  type: 'group',
  children: [
    {
      id: 'Servicelist',
      title: 'Popular Services',
      type: 'item',
      url: '/dashboard/Servicelist',
      icon: icons.IconPackage,
      breadcrumbs: false
    }
  ]};

export default services;
