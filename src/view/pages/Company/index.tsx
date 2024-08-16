import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../app/hooks/useAuth';

export function Company() {
  const { selectCompany } = useAuth();
  const navigate = useNavigate();

  function handleClickSelectCompany() {
    selectCompany('teste1');
    navigate('/');
  }

  return (
    <button type="button" onClick={() => handleClickSelectCompany()}>
      Alterar empresa
    </button>
  );
}
