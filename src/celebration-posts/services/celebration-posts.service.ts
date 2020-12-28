import { Model, Types } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CelebrationPost, CelebrationPostDocument, CelebrationPostDto } from '../schemas/celebration-post.schema';
import { Celebration, CelebrationDocument } from '../../celebrations/schemas/celebrations.schema';

@Injectable()
export class CelebrationPostsService {
  constructor(
    @Inject(CelebrationPost.name) private celebrationPostModel: Model<CelebrationPostDocument>,
    @Inject(Celebration.name) private celebrationModel: Model<CelebrationDocument>,
    ) {}


  async createOne(celebrationId: string, celebrationPostDto: CelebrationPostDto): Promise<CelebrationPost> {
    const celebrationPost = new this.celebrationPostModel({ 
      ...celebrationPostDto,
      celebration: Types.ObjectId(celebrationId),
    });
    return celebrationPost.save();
  }

  async findAll(): Promise<CelebrationPost[]> {
    return this.celebrationPostModel
      .find()
      .populate('celebration', null, this.celebrationModel)
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

  async findByCelebrationId(celebrationId: string) {
    return this.celebrationPostModel.find({
      'celebration._id': Types.ObjectId(celebrationId)
    })
    .exec();
  }
}