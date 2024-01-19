// src/tasks/tasks.controller.ts
import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';

@ApiTags('tasks') // Swagger tag
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
