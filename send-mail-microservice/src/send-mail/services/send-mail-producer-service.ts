import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue('send-mail-queue') private queue: Queue) {}

  async execute(createUser: ICreateUserDTO) {
    await this.queue.add('send-mail-job', createUser);
  }
}
