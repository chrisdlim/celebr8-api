import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CelebrationsModule } from './celebrations/modules/celebrations.module';
import { mongooseProviders } from './database/mongoose/mongoose.providers';

@Module({
  imports: [
    CelebrationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...mongooseProviders],
})
export class AppModule {}
