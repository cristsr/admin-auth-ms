import { AuthReq } from 'auth/dto';

export interface AuthStrategy {
  register(data: AuthReq): Promise<any>;
  login(data: AuthReq): Promise<any>;
}
