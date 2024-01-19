// src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private tasks = ['Task 1', 'Task 2', 'Task 3'];

  getTasks() {
    this.logger.log('Fetching tasks from the service...');
    return this.tasks;
  }

  createTask(taskDto: TaskDto) {
    this.logger.log(`Creating task with title: ${taskDto.title}`);
    this.tasks.push(taskDto.title);
    return taskDto;
  }
}
