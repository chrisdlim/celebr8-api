import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat as CatInterface } from '../interfaces/cat.interface';
import { Cat } from '../schemas/cat.schema';


@Injectable()
export class CatsService {
  constructor(@Inject(Cat.name) private catModel: Model<CatInterface>) {}

  async create(catDto: Cat): Promise<Cat> {
    const createdCat = new this.catModel(catDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async addRandomCat() {
    const catDto = {
      name: `#${(Math.random() * 100).toFixed(0)} Cat`,
      breed: 'Dog',
      age: +(Math.random() * 100 / 2).toFixed(0),
    };
    const createdCat = new this.catModel(catDto);
    return createdCat.save();
  }

  async deleteAll(): Promise<void> {
    return this.catModel.deleteMany().exec();
  }
}