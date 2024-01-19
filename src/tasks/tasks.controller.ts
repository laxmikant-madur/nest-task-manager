// src/tasks/tasks.controller.ts
import { Controller, Get, Logger, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    this.logger.log('Fetching all tasks...');
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() taskDto: TaskDto) {
    this.logger.log(`Creating task with title: ${taskDto.title}`);
    return this.tasksService.createTask(taskDto);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    this.logger.log(`Fetching task with ID: ${id}`);
    return this.tasksService.getTaskById(id);;
  }

  // Add a sample endpoint that throws a generic exception
  @Get('error-sample')
  throwError() {
    throw new HttpException('Sample error message', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
