import { Outlet } from 'react-router-dom';

import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col gap-16 lg:w-1/2">
        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      <div className="hidden sm:w-1/2 h-full justify-center items-center p-8 sm:flex bg-white">
        <div className="p-10">
          <Logo className="text-gray-700 h-10" />
          <p className="text-gray-600 text-lg tracking-tight mt-2">
            por aqui suas vendas não tem pause!
          </p>
        </div>
      </div>
    </div>
  );
}
