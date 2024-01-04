// assets
import { IconBrandChrome, IconHelp, IconShieldLock } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconShieldLock };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Reset transcation pin',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Finvesta Security Shied',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconShieldLock,
      external: true,
      // target: true
    }
  ]
};

export default other;
