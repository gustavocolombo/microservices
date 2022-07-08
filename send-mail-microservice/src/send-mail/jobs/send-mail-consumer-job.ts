import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

@Processor('send-mail-queue')
export class SendMailConsumerJob {
  constructor(private mailerService: MailerService) {}

  @Process('send-mail-job')
  async sendMailJob(job: Job<ICreateUserDTO>) {
    const { data } = job;

    await this.mailerService.sendMail({
      to: data.email,
      from: 'Microservices Team',
      subject: 'Welcome to microservices plataform!',
      text: `Welcome ${data.name}! Join in the plataform and have fun!`,
    });
  }
}
