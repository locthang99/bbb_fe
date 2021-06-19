import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'THỐNG KÊ',
    group: true,
  },
  {
    title: 'Dữ liệu',
    icon: 'pie-chart-outline',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'Người dùng',
    icon: 'bar-chart-outline',
    link: '/admin/dashboard-user',
  },
  {
    title: 'DEEP LEARNING',
    group: true,
  },
  {
    title: 'Mô hình Deeplearning',
    icon: 'layers-outline',
    link: '/admin/deeplearning',
  },
  {
    title: 'QUẢN LÍ DỮ LIỆU',
    group: true,
  },
  {
    title: 'Bài hát',
    icon: 'music',
    link: '/admin/song',
  },
  {
    title: 'Playlist',
    icon: 'list',
    link: '/admin/playlist',
  },
  {
    title: 'Thể loại',
    icon: 'file',
    link: '/admin/type',
  },
  {
    title: 'Tag',
    icon: 'bookmark-outline',
    link: '/admin/tag',
  },
  {
    title: 'QUẢN LÍ NGƯỜI DÙNG',
    group: true,
  },
  {
    title: 'Người dùng và phân quyền',
    icon: 'people-outline',
    link: '/admin/account',
  },
  {
  title: '---------------------------------------------------',
    group: true,
  },
  {
    title: 'Cá nhân',
    icon: 'person-outline',
    link: '/admin/user',
  },
  {
    title: 'Đăng xuất',
    icon: 'log-out',
    link: '/admin/logout',
  },
];
