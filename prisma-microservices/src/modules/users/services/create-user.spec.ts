import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './create-user-service';

describe('CreateUser', () => {
  let provider: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserService],
    }).compile();

    provider = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
