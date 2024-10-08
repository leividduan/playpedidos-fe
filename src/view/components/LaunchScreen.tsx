import { Transition } from '@headlessui/react';

import { Spinner } from './Spinner';

interface ILaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: ILaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-gray-800 fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <Spinner className="bg-gray-800 fill-white" />
        </div>
      </div>
    </Transition>
  );
}
