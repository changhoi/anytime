import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/schemas/postgres/post.schema';
import { Repository } from 'typeorm';
import { CreatePostVO } from './post.vo';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  getAllPosts() {
    return this.postRepository.find();
  }

  createPost(vo: CreatePostVO) {
    const { title, username, password, content } = vo;
    const post = this.postRepository.create({
      title,
      username,
      password,
      content,
    });

    return this.postRepository.save(post);
  }
}
