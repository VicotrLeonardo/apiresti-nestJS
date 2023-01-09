import { Test, TestingModule } from '@nestjs/testing';
import { DataFormController } from './data-form.controller';

describe('DataFormController', () => {
  let controller: DataFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataFormController],
    }).compile();

    controller = module.get<DataFormController>(DataFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
