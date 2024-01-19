export interface IMenu {
  path: string;
  name: string;
}

export const menus: IMenu[] = [
  { path: '/', name: 'Dashboard' },
  { path: '/categories', name: 'Categorias' },
  { path: '/products', name: 'Produtos' },
];
