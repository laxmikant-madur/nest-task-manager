// src/tasks/dto/task.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  readonly title: string;
}
