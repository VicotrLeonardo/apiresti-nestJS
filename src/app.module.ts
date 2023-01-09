import { Module } from '@nestjs/common';
import { CamposController } from './controllers/app-controller/app.controller';
import { DatabaseService } from './services/database.service';
import { FormConfigController } from './controllers/form-config/form-config.controller';

@Module({
  imports: [],
  controllers: [FormConfigController, CamposController],
  providers: [DatabaseService],
})
export class AppModule {}


