// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBuildingBank, IconWallet, IconLock } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBuildingBank,
  IconWallet,
  IconLock
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'My Account (Payout Details)',
  type: 'group',
  children: [
    {
      id: 'Savings A/C',
      title: 'Savings A/C',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconBuildingBank,
      breadcrumbs: false
    },
    {
      id: 'util-typography',
      title: 'Wallet',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconWallet,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Add New',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconBuildingBank,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Personal Details',
      type: 'collapse',
      icon: icons.IconLock,
      children: [
        {
          id: 'tabler-icons',
          title: 'Basic & Address Details',
          type: 'item',
          icon: icons.IconShieldLock,
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'KYC Details',
          type: 'item',
          external: true,
          icon: icons.IconShieldLock,
          // target: '_blank',
          url: '/dashboard/default',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
