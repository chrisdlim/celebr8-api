import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CelebrationsService } from '../services/celebrations.service';

@Controller('celebrations')
export class CelebrationsController {
  constructor(private readonly celebrationService: CelebrationsService) {}

  @Get()
  async getCelebrations() {
    return await this.celebrationService.findAll();
  }

  @Post('random')
  async createRandom() {
    return await this.celebrationService.addRandomCat();
  }
}
