import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CelebrationsModule } from 'src/celebrations/modules/celebrations.module';
import { Celebration, CelebrationSchema } from 'src/celebrations/schemas/celebrations.schema';
import { modelProviders } from 'src/database/mongoose/model.providers';
import { MongooseModuleC8 } from 'src/database/mongoose/mongoose.module';
import { CelebrationPostsController } from '../controllers/celebration-posts.controller';
import { CelebrationPostsService } from '../services/celebration-posts.service';

@Module({
  imports: [MongooseModuleC8],
  controllers: [CelebrationPostsController],
  providers: [
    CelebrationPostsService,
    ...modelProviders,
  ],
  exports: [CelebrationPostsModule]
})
export class CelebrationPostsModule {}

/**
 * Notes:
 * providers must include the model providers
 * imports must include the MongooseModuleC8 in order to provide the connections to models
 */