import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StrategyRegister } from 'strategy/strategy.provider';
import { AuthController } from 'auth/controllers';
import { AuthService } from 'auth/services';
import { UserEntity } from 'auth/entities';
import { AUTH_STRATEGIES } from 'auth/types';
import { AuthStrategies } from 'auth/strategies';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({}),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    StrategyRegister({
      provide: AUTH_STRATEGIES,
      strategies: AuthStrategies,
    }),
  ].flat(),
})
export class AuthModule {}
