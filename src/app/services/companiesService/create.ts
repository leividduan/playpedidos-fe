import { ICompany } from '../../entities/ICompany';
import { httpClient } from '../httpClient';

export interface ICreateCompanyParams {
  name: string;
  document: string;
}

export async function create(params: ICreateCompanyParams) {
  const { data } = await httpClient.post<ICompany>('/companies', params);

  return data;
}
