import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { ExitIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../app/hooks/useAuth';

import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { signout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center border border-gray-200">
          <span className="text-sm tracking-tight text-gray-900 font-medium">
            {user?.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-36">
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={() => navigate('/companies')}
        >
          Empresas
          <BuildingOffice2Icon className="w-5 h-5" />
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={signout}
        >
          Sair
          <ExitIcon className="w-5 h-5" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
