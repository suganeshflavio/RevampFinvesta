// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBuildingBank, IconWallet,IconFileCertificate } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBuildingBank,
  IconWallet,
  IconFileCertificate
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const AdminUtils = {
  id: 'utilities',
  title: 'Data Points',
  type: 'group',
  children: [
    {
      id: 'util-color',
      title: 'Add data point',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconBuildingBank,
      breadcrumbs: false
    },
    {
      id: 'util-typography',
      title: 'Access groups',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconWallet,
      breadcrumbs: false
    },
  
  ]
};

export default AdminUtils;
