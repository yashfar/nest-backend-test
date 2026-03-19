import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;
}

export class UpdateCommentDto {
  @IsString()
  text: string;
}
