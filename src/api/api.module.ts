import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';

const modules = [PostModule];

@Module({
  imports: modules,
})
export class APIModule {}
