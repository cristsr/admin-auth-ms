import { Controller, Post, Body, Patch } from '@nestjs/common';
import { AuthService } from 'auth/services';
import { RegisterReq, LoginReq, RecoveryReq } from 'auth/dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: RegisterReq) {
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginReq) {
    return this.authService.login(data);
  }

  @Post('recovery-account')
  recovery(@Body() data: RecoveryReq) {
    return this.authService.recovery(data);
  }

  @Patch(':id')
  profile() {
    return {};
  }
}
