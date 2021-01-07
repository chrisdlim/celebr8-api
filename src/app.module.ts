import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CelebrationPostsModule } from './celebration-posts/modules/celebration-posts.module';
import { CelebrationsModule } from './celebrations/modules/celebrations.module';
import { mongooseProviders } from './database/mongoose/mongoose.providers';

@Module({
  imports: [
    CelebrationPostsModule,
    CelebrationsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    ...mongooseProviders,
  ],
})
export class AppModule {}
