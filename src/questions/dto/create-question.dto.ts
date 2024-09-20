import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { StatusDto } from '../../statuses/dto/status.dto';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
  

  @ApiProperty()
  title: string;
  @ApiProperty()
  question: string;

  @ApiProperty()
  answerType: string;

  @ApiProperty()
  answers: [string];


  @ApiPropertyOptional({ type: StatusDto })
  @IsOptional()
  @Type(() => StatusDto)
  status: StatusDto;


}
