// assets
import { IconUsers, IconFileStack, IconSubtask, IconShield,IconDatabase } from '@tabler/icons';

// constant
const icons = {
  IconFileStack,
  IconSubtask,
  IconUsers,
  IconShield,
  IconDatabase
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const AdminUtils = {
  id: 'utilities',
  title: 'Data Points',
  type: 'group',
  children: [
    {
      id: 'product master',
      title: 'Product Master',
      type: 'item',
      url: '/Admin/AddProduct',
      icon: icons.IconFileStack,
      breadcrumbs: false
    },
    {
      id: 'field master',
      title: 'Field Master',
      type: 'item',
      url: '/Admin/AddDP',
      icon: icons.IconSubtask,
      breadcrumbs: false
    },
    {
      id: 'access management',
      title: 'Access Management',
      type: 'item',
      url: '/Admin/AccessManagement',
      icon: icons.IconShield,
      breadcrumbs: false
    },
    {
      id: 'create group',
      title: 'Create Group',
      type: 'item',
      url: '/Admin/CreateGroup',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'View add points',
      title: 'View Add Points',
      type: 'item',
      url: '/Admin/ViewDatapoints',
      icon: icons.IconDatabase,
      breadcrumbs: false
    },

  ]
};

export default AdminUtils;
