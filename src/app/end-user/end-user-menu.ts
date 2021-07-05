import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dữ liệu',
    icon: 'pie-chart-outline',
    link: '/enduser/dashboard',
    home: true,
  },

  {
    title: 'Bài hát',
    icon: 'music',
    link: '/enduser/song',
  },
  {
    title: 'Tạo mới bài hát',
    icon: 'plus-square-outline',
    link: '/enduser/newsong',
  },
  {
    title: 'Nâp cấp tài khoản',
    icon: 'arrowhead-up-outline',
    link: '/enduser/buyvip',
  },
  {
    title: 'Hóa đơn',
    icon: 'file-text-outline',
    link: '/enduser/bill',
  },
  {
    title: 'Cá nhân',
    icon: 'person-outline',
    link: '/enduser/user',
  },
  {
  title: '---------------------------------------------------',
    group: true,
  },
  {
    title: 'Đăng xuất',
    icon: 'log-out',
    link: '/enduser/logout',
  },
];
