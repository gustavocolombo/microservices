import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from '../../shared/connection/prisma/prisma.service';
import { UserController } from './infra/http/controller/user.controller';
import { CreateUserService } from './services/create-user-service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://dvovgagk:2rGpAEaPcrkdMYBFmW4oWKgthW_vNdI4@jackal.rmq.cloudamqp.com/dvovgagk',
          ],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [CreateUserService, PrismaService],
  controllers: [UserController],
})
export class UsersModule {}
