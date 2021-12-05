import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APIModule } from './api/api.module';
import { Post } from './schemas/postgres/post.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'anytime',
      dropSchema: true,
      synchronize: true,
      entities: [Post],
    }),
    APIModule,
  ],
})
export class AppModule {}
