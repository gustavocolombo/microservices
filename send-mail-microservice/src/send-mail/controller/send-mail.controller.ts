import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { SendMailProducerService } from '../services/send-mail-producer-service';

@Controller('send-mail')
export class SendMailController {
  constructor(private sendMailService: SendMailProducerService) {}

  @Post()
  async sendMail(@Body() createUser: ICreateUserDTO) {
    return await this.sendMailService.execute(createUser);
  }

  @EventPattern('hello')
  async hello(data: string) {
    console.log('data', data);
  }
}
