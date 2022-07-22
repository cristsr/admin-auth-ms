import { LocalService } from 'auth/strategies';
import { RegisterType } from 'auth/types';

export const AuthStrategies = {
  [RegisterType.Local]: LocalService,
};
