import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CatsService } from '../services/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats() {
    return await this.catsService.findAll();
  }

  @Post('random')
  async addCat() {
    return this.catsService.addRandomCat();
  }

  @Delete('delete')
  async deleteCats() {
    return await this.catsService.deleteAll();
  }
}
