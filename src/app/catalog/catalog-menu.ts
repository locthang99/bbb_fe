import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'THỐNG KÊ',
    group: true,
  },
  {
    title: 'Dữ liệu',
    icon: 'pie-chart-outline',
    link: '/catalog/dashboard',
    home: true,
  },
  {
    title: 'Người dùng',
    icon: 'bar-chart-outline',
    link: '/catalog/dashboard-user',
  },
  {
    title: 'DEEP LEARNING',
    group: true,
  },
  {
    title: 'Mô hình Deeplearning',
    icon: 'layers-outline',
    link: '/catalog/deeplearning',
  },
  {
    title: 'QUẢN LÍ DỮ LIỆU',
    group: true,
  },
  {
    title: 'Bài hát',
    icon: 'music',
    link: '/catalog/song',
  },
  {
    title: 'Playlist',
    icon: 'list',
    link: '/catalog/playlist',
  },
  {
    title: 'Thể loại',
    icon: 'file',
    link: '/catalog/type',
  },
  {
    title: 'Tag',
    icon: 'bookmark-outline',
    link: '/catalog/tag',
  },
  {
    title: 'QUẢN LÍ NGƯỜI DÙNG',
    group: true,
  },
  {
    title: 'Người dùng và phân quyền',
    icon: 'people-outline',
    link: '/catalog/account',
  },
  {
  title: '---------------------------------------------------',
    group: true,
  },
  {
    title: 'Cá nhân',
    icon: 'person-outline',
    link: '/catalog/user',
  },
  {
    title: 'Đăng xuất',
    icon: 'log-out',
    link: '/catalog/logout',
  },
];
