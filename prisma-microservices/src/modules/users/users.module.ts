import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/connection/prisma/prisma.service';
import { UserController } from './infra/http/controller/user.controller';
import { CreateUserService } from './services/create-user-service';

@Module({
  providers: [CreateUserService, PrismaService],
  controllers: [UserController],
})
export class UsersModule {}
