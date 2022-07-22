import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { validate } from 'environment';
import { DatabaseModule } from 'database';
import { AuthModule } from 'auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { TypeormFilter } from './core/filters';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
    }),
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: TypeormFilter,
    },
  ],
})
export class AppModule {}
