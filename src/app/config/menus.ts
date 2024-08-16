import {
  ChartBarSquareIcon,
  ShoppingBagIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import {
  ChartBarSquareIcon as ChartBarSquareIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  TagIcon as TagIconSolid,
} from '@heroicons/react/24/solid';

export interface IMenu {
  path: string;
  name: string;
  icon: typeof ChartBarSquareIcon;
  iconSolid: typeof ChartBarSquareIcon;
}

export const menus: IMenu[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: ChartBarSquareIcon,
    iconSolid: ChartBarSquareIconSolid,
  },
  {
    path: '/products',
    name: 'Produtos',
    icon: ShoppingBagIcon,
    iconSolid: ShoppingBagIconSolid,
  },
  {
    path: '/categories',
    name: 'Categorias',
    icon: TagIcon,
    iconSolid: TagIconSolid,
  },
];
