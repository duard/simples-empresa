import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { ApiCoreModule } from '@simples-empresa/api/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
