import { Inject } from '@nestjs/common';

export const InjectStrategies = (token): ReturnType<typeof Inject> => {
  return Inject(token);
};
