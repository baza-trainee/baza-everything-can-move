import { NavLinksArrType } from '@/constants/navlinks';

export interface HeaderNavigationProps {
  headerNav: NavLinksArrType;
  handleMenuClick: () => void;
  openMenu: boolean;
}

export interface NavigationLinksProps {
  headerNav: NavLinksArrType;
  onClickLink: () => void;
}
