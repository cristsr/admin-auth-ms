import { Injectable } from '@nestjs/common';
import { RegisterReq, LoginReq, RecoveryReq } from 'auth/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'auth/entities';
import { Repository } from 'typeorm';
import { InjectStrategies } from 'strategy/strategy.decorator';
import { AUTH_STRATEGIES } from 'auth/types';
import { AuthStrategies, AuthStrategy } from 'auth/strategies';

@Injectable()
export class AuthService {
  constructor(
    @InjectStrategies(AUTH_STRATEGIES)
    private strategies: AuthStrategy[],

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async register(data: RegisterReq) {
    const strategy = this.strategies.find(
      (object: AuthStrategy) => object instanceof AuthStrategies[data.type],
    );

    return strategy.register(data);
  }

  login(data: LoginReq) {
    const strategy = this.strategies.find(
      (object: AuthStrategy) => object instanceof AuthStrategies[data.type],
    );

    return strategy.login(data);
  }

  recovery(data: RecoveryReq) {
    return `This action returns a #${data.email} auth`;
  }
}
