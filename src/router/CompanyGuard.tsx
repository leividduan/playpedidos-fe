import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../app/hooks/useAuth';

export function CompanyGuard() {
  const { signedIn, companyId } = useAuth();

  if (signedIn && !companyId) {
    return <Navigate to="/companies" replace />;
  }

  return <Outlet />;
}
