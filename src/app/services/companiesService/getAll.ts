import { ICompany } from '../../entities/ICompany';
import { httpClient } from '../httpClient';

export async function getAll() {
  const { data } = await httpClient.get<ICompany[]>('/companies');

  return data;
}
