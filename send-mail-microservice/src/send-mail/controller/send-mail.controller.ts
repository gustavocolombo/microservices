import { Body, Controller, Post } from '@nestjs/common';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { SendMailProducerService } from '../services/send-mail-producer-service';

@Controller('send-mail')
export class SendMailController {
  constructor(private sendMailService: SendMailProducerService) {}

  @Post()
  async sendMail(@Body() createUser: ICreateUserDTO) {
    return await this.sendMailService.execute(createUser);
  }
}
