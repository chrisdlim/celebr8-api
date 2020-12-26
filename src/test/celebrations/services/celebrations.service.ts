import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Celebration } from '../schemas/celebrations.schema';
import { Celebration as CelebrationInterface } from '../interfaces/celebration.interface';

@Injectable()
export class CelebrationsService {
  constructor(@Inject(Celebration.name) private celebrationModel: Model<CelebrationInterface>) {}


  async create(celebrationDto: Celebration): Promise<Celebration> {
    const celebration = new this.celebrationModel(celebrationDto);
    return celebration.save();
  }

  async findAll(): Promise<Celebration[]> {
    return this.celebrationModel.find().exec();
  }

  async addRandomCat() {
    const celebrationDto = {
      name: `#${(Math.random() * 100).toFixed(0)} Celebration`,
      breed: 'Dog',
      age: +(Math.random() * 100 / 2).toFixed(0),
    };
    const celebration = new this.celebrationModel(celebrationDto);
    return celebration.save();
  }

  async deleteAll(): Promise<void> {
    return this.celebrationModel.deleteMany().exec();
  }
}