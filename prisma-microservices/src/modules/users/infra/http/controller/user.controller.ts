import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserService } from '../../../services/create-user-service';

@Controller('user')
export class UserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/create')
  async createUser(@Body() { name, email, password }: Prisma.UsersCreateInput) {
    return await this.createUserService.execute({ name, email, password });
  }
}
