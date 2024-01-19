import { Injectable } from '@nestjs/common';
import { HttpService } from './common/http/http.service';
import CONFIG from './config/config';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getDummyData(): Promise<any> {
    const dummyEndpoint = CONFIG.URL;
    return this.httpService.get(dummyEndpoint);
  }
}
