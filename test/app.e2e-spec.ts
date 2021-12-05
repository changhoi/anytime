import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { getConnection } from 'typeorm';
import { CreatePostDTO } from 'src/api/post/post.dto';
import * as faker from 'faker';

describe('E2E Test for Anytime', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    app.setGlobalPrefix('api');

    await app.init();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  describe('Get post list', () => {
    it('Success test', () => {
      const url = '/api/posts';

      return request(app.getHttpServer())
        .get(url)
        .expect(200)
        .expect((res) => {
          expect(res.body.result.length).toBe(0);
        });
    });
  });

  describe('Create a post', () => {
    const url = '/api/posts';

    it('Success test', () => {
      const dto: CreatePostDTO = {
        content: faker.lorem.paragraph(),
        title: faker.datatype.string(50),
        username: faker.datatype.string(10),
        password: faker.datatype.string(10),
      };

      return request(app.getHttpServer())
        .post(url)
        .send(dto)
        .expect(201)
        .expect((res) => {
          expect(res.body.result).toBe(true);
        });
    });

    it('Error with empty DTO', () => {
      return request(app.getHttpServer()).post(url).send({}).expect(400);
    });

    it('Error with invalid DTO', () => {
      const dto: CreatePostDTO = {
        content: faker.lorem.paragraph(),
        title: faker.datatype.string(51),
        username: faker.datatype.string(11),
        password: faker.datatype.string(11),
      };
      return request(app.getHttpServer())
        .post(url)
        .send(dto)
        .expect(400)
        .expect((res) => {
          expect(res.body.message.length).toBe(3);
        });
    });
  });

  // Assignment: Make your test code from here !
});
