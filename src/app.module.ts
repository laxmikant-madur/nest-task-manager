import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { HttpModule } from './common/http/http.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpInterceptor } from './common/http/http.interceptor';
import { HttpService } from './common/http/http.service';

@Module({
  imports: [TasksModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
    HttpService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor,
    },
  ],
})
export class AppModule {}
