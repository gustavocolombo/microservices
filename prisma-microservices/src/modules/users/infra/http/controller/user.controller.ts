import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { CreateUserService } from '../../../services/create-user-service';

@Controller('user')
export class UserController {
  constructor(
    private createUserService: CreateUserService,
    @Inject('USERS_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('/create')
  async createUser(@Body() { name, email, password }: Prisma.UsersCreateInput) {
    this.client.emit('hello', { name, email, password });
    return await this.createUserService.execute({ name, email, password });
  }
}
