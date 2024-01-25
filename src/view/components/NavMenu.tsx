import { NavLink } from 'react-router-dom';

import { IMenu, menus } from '../../app/config/menus';
import { cn } from '../../app/utils/cn';

import { Logo } from './Logo';

export function NavMenu() {
  return (
    <aside className="z-40 w-64 h-screen">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <Logo className="h-6 text-white w-full mb-4" />
        <ul className="space-y-2 font-medium">
          {menus.map((menu: IMenu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group',
                    isActive && 'bg-gray-700',
                  )
                }
              >
                <menu.icon className="h-5 w-5" />
                <span className="ms-3">{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
