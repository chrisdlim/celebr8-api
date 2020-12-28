import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CelebrationPost, CelebrationPostSchema } from 'src/celebration-posts/schemas/celebration-post.schema';
import { mongooseProviders } from './mongoose.providers';

@Module({
  providers: [...mongooseProviders,],
  exports: [...mongooseProviders],
})
export class MongooseModuleC8 {}