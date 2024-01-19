// src/common/http/http.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    request.headers['Name'] = 'NestJS Sample Application';

    this.logger.log(
      `Outgoing Request - Method: ${request.method}, URL: ${request.url}, Headers: ${JSON.stringify(request.headers)}`,
    );

    return next.handle();
  }
}
