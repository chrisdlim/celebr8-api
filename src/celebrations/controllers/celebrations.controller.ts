import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Celebration } from '../schemas/celebrations.schema';
import { CelebrationsService } from '../services/celebrations.service';

@Controller('celebrations')
export class CelebrationsController {
  constructor(private readonly celebrationService: CelebrationsService) {}

  @Get()
  async getCelebrations(): Promise<Celebration[]> {
    return await this.celebrationService.findAll();
  }

  @Get(':id')
  async getCelebrationById(@Param() params): Promise<Celebration> {
    return await this.celebrationService.findOne(params.id);
  }

  @Delete(':id')
  async deleteCelebrationById(@Param() params): Promise<any> {
    return await this.celebrationService.deleteOne(params.id);
  }

  @Post()
  async createOne(@Body() body): Promise<Celebration> {
    return await this.celebrationService.createOne(body);
  }

  @Post(':id')
  async updateOne(@Param() params, @Body() body): Promise<Celebration> {
    return await this.celebrationService.updateOne(params.id, body);
  }
  
  @Post('random')
  async createRandom(): Promise<Celebration> {
    return await this.celebrationService.addRandomCelebration();
  }

  @Delete('dev/delete')
  async deleteAll(): Promise<any> {
    return await this.celebrationService.deleteAll();
  }
}
