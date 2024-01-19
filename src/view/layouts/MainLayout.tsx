import { Outlet } from 'react-router-dom';

import { useMenu } from '../../app/hooks/useMenu';
import { NavMenu } from '../components/NavMenu';
import { UserMenu } from '../components/UserMenu';

export function MainLayout() {
  const { menuName } = useMenu();

  return (
    <div className="w-full h-full flex">
      <NavMenu />
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{menuName}</h1>
          <UserMenu />
        </header>
        <div className="px-4 py-4 rounded-lg bg-white h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
