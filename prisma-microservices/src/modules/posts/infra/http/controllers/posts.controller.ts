import { Body, Controller, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreatePostsService } from '../../../services/create-posts-service';

@Controller('posts')
export class PostsController {
  constructor(private createPostsService: CreatePostsService) {}

  @Post('/create/:id')
  async createPosts(
    @Body() { title, content }: Prisma.PostsCreateInput,
    @Param('id') user_id: string,
  ) {
    return await this.createPostsService.execute(user_id, {
      title,
      content,
    });
  }
}
