import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CelebrationPost, CelebrationPostDto } from '../schemas/celebration-post.schema';
import { CelebrationPost as CelebrationPostInterface } from '../interfaces/celebration-post.interface';
import { Celebration } from '../../celebrations/schemas/celebrations.schema';
import { Celebration as CelebrationInterface } from '../../celebrations/interfaces/celebration.interface';

@Injectable()
export class CelebrationPostsService {
  constructor(
    @Inject(CelebrationPost.name) private celebrationPostModel: Model<CelebrationPostInterface>,
    @Inject(Celebration.name) private celebrationModel: Model<CelebrationInterface>,
    ) {}


  async createOne(celebrationId: string, celebrationPostDto: CelebrationPostDto): Promise<CelebrationPost> {
    const celebration = await this.celebrationModel.findOne({ _id: celebrationId })
    console.log(celebration)
    const celebrationPost = new this.celebrationPostModel({ 
      ...celebrationPostDto, 
      celebration,
    });

    return celebrationPost.save();
  }

  async findAll(): Promise<CelebrationPost[]> {
    return this.celebrationPostModel
      .find()
      .exec();
  }

  async findOne(_id: string): Promise<CelebrationPost> {
    return this.celebrationPostModel.findOne({ _id }).exec();
  }

  async deleteOne(_id: string): Promise<any> {
    return this.celebrationPostModel.deleteOne({ _id });
  }

  async updateOne(_id: string, update: Partial<CelebrationPost>): Promise<CelebrationPost> {
    const filter  = { _id };
    const setter  = { $set: update };
    const options = { new: true };
    return this.celebrationPostModel.findOneAndUpdate(filter, setter, options);
  }

  async deleteAll(): Promise<void> {
    return this.celebrationPostModel.deleteMany().exec();
  }
}