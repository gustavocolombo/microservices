import { Test, TestingModule } from '@nestjs/testing';
import { SendMailProducerService } from './send-mail-producer-service';

describe('SendMailProducerService', () => {
  let provider: SendMailProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMailProducerService],
    }).compile();

    provider = module.get<SendMailProducerService>(SendMailProducerService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
