import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../shared/connection/prisma/prisma.service';

@Injectable()
export class CreatePostsService {
  constructor(private prismaService: PrismaService) {}

  async execute(user_id: string, { title, content }: Prisma.PostsCreateInput) {
    const posts = await this.prismaService.posts.create({
      data: { title, content, users: { connect: { id: user_id } } },
    });

    return posts;
  }
}
