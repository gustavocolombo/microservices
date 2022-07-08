import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { PrismaService } from '../../../shared/connection/prisma/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private prismaService: PrismaService) {}

  async execute({ name, email, password }: Prisma.UsersCreateInput) {
    const findUser = await this.prismaService.users.findFirst({
      where: { email },
    });

    if (findUser) throw new Error('Usuário com e-mail já cadastrado!');

    const user = await this.prismaService.users.create({
      data: { name, email, password: await hash(password, 8) },
    });

    return user;
  }
}
