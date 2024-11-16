import { Logo } from '../../components/Logo';

import { CompanyAvatar } from './components/CompanyAvatar';
import { NewCompany } from './components/NewCompany';
import { useCompanyController } from './useCompanyController';

export function Company() {
  const { companies, isLoading, handleClickSelectCompany } =
    useCompanyController();

  return (
    <div className="h-full w-full">
      <div className="mb-4 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
          <Logo className="h-6 text-gray-900" />
        </h5>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-12 font-bold text-gray-900 tracking-[-1px] sm:text-4xl sm:mb-24">
          Qual ambiente você deseja utilizar?
        </h1>
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {!isLoading &&
            companies?.map((company) => (
              <CompanyAvatar
                key={company.id}
                handleOnClick={handleClickSelectCompany}
                name={company.name}
              />
            ))}
          <NewCompany />
        </div>
      </div>
    </div>
  );
}
