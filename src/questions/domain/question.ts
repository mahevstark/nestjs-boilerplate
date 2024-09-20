import { Status } from '../../statuses/domain/status';
import { ApiProperty } from '@nestjs/swagger';

const idType = Number;

export class Question {
  @ApiProperty({
    type: idType,
  })
  id: number | string;

  @ApiProperty({
    type: String,
    example: 'Question',
  })
  title: string | null;

  @ApiProperty({
    type: String,
    example: 'Question itelf',
  })
  question: string | null;

  @ApiProperty({
    type: String,
    example: 'text, multiple-choice, etc',
  })
  answerType: string | null;

  @ApiProperty({
    type: [String],
    example: ['Answer 1', 'Answer 2', 'Answer 3'],
  })
  answers: string[] | [];


  @ApiProperty({
    type: () => Status,
  })
  status?: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
