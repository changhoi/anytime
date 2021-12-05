import { IsNotEmpty, Length } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @Length(0, 50)
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @Length(0, 10)
  username: string;

  @IsNotEmpty()
  @Length(0, 10)
  password: string;
}
