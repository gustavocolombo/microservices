import { Test, TestingModule } from '@nestjs/testing';
import { SendMailConsumerJob } from './send-mail-consumer-job';

describe('SendMailConsumerJob', () => {
  let provider: SendMailConsumerJob;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMailConsumerJob],
    }).compile();

    provider = module.get<SendMailConsumerJob>(SendMailConsumerJob);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
