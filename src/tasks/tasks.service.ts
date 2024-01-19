// src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks') // Swagger tag
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private tasks = ['Task 1', 'Task 2', 'Task 3'];

  getTasks() {
    this.logger.log('Fetching tasks from the service...');
    return this.tasks;
  }
}
