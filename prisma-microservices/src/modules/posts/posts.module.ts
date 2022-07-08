import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/connection/prisma/prisma.service';
import { PostsController } from './infra/http/controllers/posts.controller';
import { CreatePostsService } from './services/create-posts-service';

@Module({
  providers: [CreatePostsService, PrismaService],
  controllers: [PostsController],
})
export class PostsModule {}
