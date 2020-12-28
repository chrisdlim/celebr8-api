import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cats.controller';
import { CatsService } from '../services/cats.service';
import { MongooseModuleC8 } from 'src/database/mongoose/mongoose.module';
import { modelProviders } from 'src/database/mongoose/model.providers';

@Module({
  imports: [MongooseModuleC8],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...modelProviders
  ],
  exports: [
    CatsModule
  ]
})
export class CatsModule {}