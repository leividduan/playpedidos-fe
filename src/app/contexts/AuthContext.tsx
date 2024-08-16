import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

// import { LaunchScreen } from '../../view/components/LaunchScreen';
import { LaunchScreen } from '../../view/components/LaunchScreen';
import { localStorageKeys } from '../config/localStorageKeys';
import { IUser } from '../entities/IUser';
import { usersService } from '../services/usersService';

interface IAuthContextValue {
  signedIn: boolean;
  user: IUser | undefined;
  companyId: string | null;
  selectCompany: (currentCompanyId: string) => void;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext<IAuthContextValue>(
  {} as IAuthContextValue,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });
  const [companyId, setCompanyId] = useState<string | null>(() =>
    localStorage.getItem(localStorageKeys.CURRENT_COMPANY),
  );

  const selectCompany = useCallback((currentCompanyId: string) => {
    localStorage.setItem(localStorageKeys.CURRENT_COMPANY, currentCompanyId);

    setCompanyId(currentCompanyId);
  }, []);

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(localStorageKeys.CURRENT_COMPANY);
    queryClient.removeQueries({ queryKey: ['users', 'me'] });
    setCompanyId(null);
    setSignedIn(false);
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        user: data,
        companyId,
        signin,
        signout,
        selectCompany,
      }}
    >
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
}
