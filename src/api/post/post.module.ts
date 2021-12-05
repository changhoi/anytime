import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { EntityModule } from 'src/schemas/entity.module';

@Module({
  imports: [EntityModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
