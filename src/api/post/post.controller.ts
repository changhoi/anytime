import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDTO } from './post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('')
  async getAllPosts() {
    const ret = await this.postService.getAllPosts();
    return { result: ret };
  }

  @Post('')
  async createPost(@Body() dto: CreatePostDTO) {
    const { title, username, password, content } = dto;
    await this.postService.createPost({
      title,
      username,
      password,
      content,
    });

    return { result: true };
  }
}
