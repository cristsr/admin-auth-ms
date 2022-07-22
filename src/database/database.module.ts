import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV } from 'environment';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: configService.get<any>(ENV.DB_TYPE),
        url: configService.get(ENV.DB_URI),
        synchronize: configService.get(ENV.DB_SYNCHRONIZE),
        autoLoadEntities: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
