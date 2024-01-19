// src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskNotFoundException } from 'src/common/exceptions/task-not-found.exception';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private tasks = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
  ];

  getTasks() {
    this.logger.log('Fetching tasks from the service...');
    return this.tasks;
  }

  createTask(taskDto: TaskDto) {
    this.logger.log(`Creating task with title: ${taskDto.title}`);
    const newTask = { id: (this.tasks.length + 1).toString(), ...taskDto };
    this.tasks.push(newTask);
    return taskDto;
  }

  getTaskById(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new TaskNotFoundException(id);
    }
    return task;
  }
}
