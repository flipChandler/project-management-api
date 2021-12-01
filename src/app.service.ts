import { Injectable } from '@nestjs/common';

@Injectable() // torna a classe em um Service (regras de negócio)
export class AppService {
  getHello(): string {
    return 'Hello World, NestJS';
  }
}
