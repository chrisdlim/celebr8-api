import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongooseProviders } from './database/mongoose/mongoose.providers';
import { CatsModule } from './test/cats/modules/cats.module';
import { CelebrationsModule } from './test/celebrations/modules/celebrations.module';
import { Celebration, CelebrationSchema } from './test/celebrations/schemas/celebrations.schema';

@Module({
  imports: [
    CelebrationsModule,
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService, ...mongooseProviders],
})
export class AppModule {}
