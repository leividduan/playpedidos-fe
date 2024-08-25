import { NavLink, useLocation } from 'react-router-dom';

import { IMenu, menus } from '../../app/config/menus';
import { cn } from '../../app/utils/cn';

import { Logo } from './Logo';

export function NavMenu() {
  const location = useLocation();

  return (
    <aside className="hidden relative h-screen sm:flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 w-full sm:max-w-60 lg:max-w-80 p-4 shadow-xl shadow-gray-500/2">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
          <Logo className="h-6 text-gray-900" />
        </h5>
      </div>
      <nav className="flex flex-col gap-1 w-full p-2 font-sans text-base font-normal text-gray-700">
        {menus.map((menu: IMenu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            role="button"
            tabIndex={0}
            className={({ isActive }) =>
              cn(
                'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-50 hover:bg-opacity-80 focus:bg-gray-100 focus:bg-opacity-80 active:bg-gray-0 active:bg-opacity-80 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 outline-none',
                isActive && 'bg-gray-50 text-gray-900',
              )
            }
          >
            <div className="grid place-items-center mr-4">
              {location.pathname === menu.path ? (
                <menu.iconSolid className="h-5 w-5" />
              ) : (
                <menu.icon className="h-5 w-5" />
              )}
            </div>
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
