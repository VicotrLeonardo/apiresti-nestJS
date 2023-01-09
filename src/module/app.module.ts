/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { configService } from '../services/config.service';
import { FormConfigController } from '../controllers/form-config/form-config.controller';
import { DataFormController } from '../controllers/data-form/data-form.controller';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, FormConfigController, DataFormController],
  providers: [AppService],
})
export class AppModule {}
