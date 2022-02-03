import { environment } from './../../../../../apis/simples-api/src/environments/environment';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from './db.config';

// nx bug with NODE_ENV variable https://stackoverflow.com/a/59805161/500439
// const ENV = process.env['NODE' + '_ENV'];
// nx bug with NODE_ENV variable https://stackoverflow.com/a/59805161/500439
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.STAGE}`],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    // RedisModule.forRoot({
    //   config: {
    //     url: 'redis://localhost:6379',
    //   },
    // }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {
  constructor(private readonly configService: ConfigService) {

    console.log(environment);

    const app_port = this.configService.get<number>('API_SIMPLES_PORT', 3000);
    const app_type = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_TYPE',
      3000
    );
    const app_sync = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_SYNCHRONIZE',
      3000
    );
    const app_host = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_HOSTNAME',
      3000
    );
    const app_user = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_USERNAME',
      3000
    );
    const app_pass = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_PASSWORD',
      3000
    );
    const app_base = this.configService.get<number>(
      'API_SIMPLES_TYPEORM_DATABASE',
      3000
    );
    console.log(
      app_port,
      app_type,
      app_host,
      app_user,
      app_pass,
      app_base,
      app_sync
    );
  }
}
