import { useLocation } from 'react-router-dom';

import { menus } from '../config/menus';

export function useMenu() {
  const location = useLocation();

  const menuName = menus.find((menu) => menu.path === location.pathname);
  return { menuName: menuName?.name ?? '' };
}
