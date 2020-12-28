import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Celebration, CelebrationDto } from '../schemas/celebrations.schema';
import { Celebration as CelebrationInterface } from '../interfaces/celebration.interface';
import { CelebrationPost } from '../../celebration-posts/schemas/celebration-post.schema';
import { CelebrationPost as CelebrationPostInterface } from '../../celebration-posts/interfaces/celebration-post.interface';
@Injectable()
export class CelebrationsService {
  constructor(
    @Inject(Celebration.name) private celebrationModel: Model<CelebrationInterface>,
    @Inject(CelebrationPost.name) private celebrationPostModel: Model<CelebrationPostInterface>,
    
  ) {}


  async createOne(celebrationDto: CelebrationDto): Promise<Celebration> {
    const celebration = new this.celebrationModel(celebrationDto);
    return celebration.save();
  }

  async findAll(): Promise<Celebration[]> {
    return this.celebrationModel
      .find()
      .exec();
  }

  async findOne(_id: string): Promise<Celebration> {
    return await this.celebrationModel.findOne({ _id }).exec();
  }

  async deleteOne(_id: string): Promise<any> {
    return this.celebrationModel.deleteOne({ _id });
  }

  async updateOne(_id: string, update: Partial<Celebration>): Promise<Celebration> {
    const filter  = { _id };
    const setter  = { $set: update };
    const options = { new: true };
    return this.celebrationModel.findOneAndUpdate(filter, setter, options);
  }

  async deleteAll(): Promise<void> {
    return this.celebrationModel.deleteMany().exec();
  }
}