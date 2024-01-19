import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error-sample')
  throwError() {
    throw new HttpException(
      'Sample error message',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get('dummy-data')
  async getDummyData() {
    this.logger.log('Fetching dummy data...');
    return await this.appService.getDummyData();
  }
}
