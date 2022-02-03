import { environment } from './../../../../../apis/simples-api/src/environments/environment';
import { join } from 'path'

export const configuration2 = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
})

export const configuration = () => ({
  port: parseInt(process.env.API_PORT || '3000', 10),
  host: process.env.API_HOST,
  jwtSecret: process.env.JWT_SECRET,
  envFile: process.env.ENV_FILE,
  database: {
    type: environment.API_SIMPLES_TYPEORM_TYPE || 'mysql',
    port: Number(environment.API_SIMPLES_TYPEORM_PORT),
    synchronize: environment.API_SIMPLES_TYPEORM_SYNC,

    database: environment.API_SIMPLES_TYPEORM_DATABASE,
    username: environment.API_SIMPLES_TYPEORM_USERNAME,
    password: environment.API_SIMPLES_TYPEORM_PASSWORD,
    host: environment.API_SIMPLES_TYPEORM_HOSTNAME,
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
      'libs/typeorm/src/lib/entity/**/*.entity{.ts,.js}',
      'libs/lib-api-cruds/src/lib/entity/**/*.entity{.ts,.js}',
      join(__dirname, './**/*.entity{.ts,.js}'),
      '../../../../../libs/lib-api-cruds/src/lib/*.entity{.ts,.js}',
      'src/**/**.entity{.ts,.js}',
      '../../../../libs/api-pessoas/src/lib/*.entity{.ts,.js}',
    ],
    // logging: 'all',
    autoLoadEntities: true,
    logging: false,
  },
})
