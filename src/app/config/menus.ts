import {
  ChartBarSquareIcon,
  ShoppingBagIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export interface IMenu {
  path: string;
  name: string;
  icon: typeof ChartBarSquareIcon;
}

export const menus: IMenu[] = [
  { path: '/', name: 'Dashboard', icon: ChartBarSquareIcon },
  { path: '/products', name: 'Produtos', icon: ShoppingBagIcon },
  { path: '/categories', name: 'Categorias', icon: TagIcon },
];
