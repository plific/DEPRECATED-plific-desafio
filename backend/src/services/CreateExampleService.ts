import { getCustomRepository } from 'typeorm';

import ExampleRepository from '../repositories/ExampleRepository';

import Example from '../models/Example';

interface Request {
}

class CreateExampleService {
  public async execute({}: Request) {
    const examplesRepository = getCustomRepository(ExampleRepository);
  }
}

export default CreateExampleService;
