import { Type } from '@nestjs/common';

export interface StrategyConfig {
  strategies: Record<any, Type>;
  provide: string;
  multi?: boolean;
}

export function StrategyRegister(config: StrategyConfig) {
  const strategies = Object.values(config.strategies);

  return [
    ...strategies,
    {
      provide: config.provide,
      useFactory: (...steps) => steps,
      inject: strategies,
      multi: config.multi || false,
    },
  ];
}
