import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CelebrationPost } from '../schemas/celebration-post.schema';
import { CelebrationPostsService } from '../services/celebration-posts.service';

@Controller('posts')
export class CelebrationPostsController {
  constructor(private readonly celebrationPostService: CelebrationPostsService) {}

  @Get()
  async getCelebrationPosts(): Promise<CelebrationPost[]> {
    return await this.celebrationPostService.findAll();
  }

  @Get(':id')
  async getCelebrationPostById(@Param() params): Promise<CelebrationPost> {
    return await this.celebrationPostService.findOne(params.id);
  }

  @Delete(':id')
  async deleteCelebrationPostById(@Param() params): Promise<any> {
    return await this.celebrationPostService.deleteOne(params.id);
  }

  @Post(':celebrationId')
  async createOne(@Param() params, @Body() body): Promise<CelebrationPost> {
    return await this.celebrationPostService.createOne(params.celebrationId, body);
  }

  @Patch(':id')
  async updateOne(@Param() params, @Body() body): Promise<CelebrationPost> {
    return await this.celebrationPostService.updateOne(params.id, body);
  }

  @Delete('dev/delete')
  async deleteAll(): Promise<any> {
    return await this.celebrationPostService.deleteAll();
  }
}
