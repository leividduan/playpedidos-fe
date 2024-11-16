import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../app/hooks/useAuth';
import { companiesService } from '../../../app/services/companiesService';

export function useCompanyController() {
  const { selectCompany } = useAuth();
  const navigate = useNavigate();

  const {
    data: companies,
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => companiesService.getAll(),
  });

  function handleClickSelectCompany(currentCompanyId: string) {
    selectCompany(currentCompanyId);
    navigate('/');
  }

  return { companies, isLoading, handleClickSelectCompany, refetch };
}
