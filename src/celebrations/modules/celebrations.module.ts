import { Module } from '@nestjs/common';
import { modelProviders } from 'src/database/mongoose/model.providers';
import { MongooseModuleC8 } from 'src/database/mongoose/mongoose.module';
import { CelebrationsController } from '../controllers/celebrations.controller';
import { CelebrationsService } from '../services/celebrations.service';

@Module({
  imports: [MongooseModuleC8],
  controllers: [CelebrationsController],
  providers: [
    CelebrationsService,
    ...modelProviders,
  ],
  exports: [CelebrationsModule]
})
export class CelebrationsModule {}

/**
 * Notes:
 * providers must include the model providers
 * imports must include the MongooseModuleC8 in order to provide the connections to models
 */