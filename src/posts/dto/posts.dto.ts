import { Transform } from 'class-transformer';
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  @IsString()
  title: string;
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  @IsString()
  content: string;
  @IsMongoId()
  author: string;
}

export class UpdatePostDto {
  @IsOptional()
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  @IsString()
  title?: string;
  @IsOptional()
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  @IsString()
  content?: string;
  @IsOptional()
  @IsMongoId()
  author?: string;
}
