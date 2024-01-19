// src/tasks/tasks.controller.ts
import { Controller, Get, Logger } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    this.logger.log('Fetching all tasks...');
    return this.tasksService.getTasks();
  }
}
