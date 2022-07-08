import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendMailController } from './send-mail/controller/send-mail.controller';
import { SendMailConsumerJob } from './send-mail/jobs/send-mail-consumer-job';
import { SendMailProducerService } from './send-mail/services/send-mail-producer-service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'emmitt.west15@ethereal.email',
          pass: 'JzF2sSH9GD8wDk6dN1',
        },
      },
    }),
    BullModule.registerQueue({
      name: 'send-mail-queue',
    }),
  ],
  controllers: [SendMailController],
  providers: [SendMailProducerService, SendMailConsumerJob],
})
export class AppModule {}
