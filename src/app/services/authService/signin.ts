import { httpClient } from '../httpClient';

export interface ISigninParams {
  email: string;
  password: string;
}

interface ISigninResponse {
  token: string;
}

export async function signin(params: ISigninParams) {
  const { data } = await httpClient.post<ISigninResponse>(
    '/auth/signin',
    params,
  );

  return data;
}
