import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { SendMailProducerService } from '../services/send-mail-producer-service';

@Controller('send-mail')
export class SendMailController {
  constructor(private sendMailService: SendMailProducerService) {}

  // async sendMail(@Body() createUser: ICreateUserDTO) {
  //   return await this.sendMailService.execute(createUser);
  // }

  @Post()
  @EventPattern('create-user')
  async sendEmail(data: string) {
    console.log('data', data);
  }
}
