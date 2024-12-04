import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Atualizarcadastro } from './interfaces/interface';

@Controller()
export class AppController {
  private clienteAdminBackend: ClientProxy;

  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/Ciclo2recuperacao'],
        queue: 'Ciclo2recuperacao',
      },
    });
  }

  @Get()
  testermq() {
    return this.clienteAdminBackend.emit('cadastro-empresa', 'ola mundo');
  }

  @Post()
  cadastro(@Body() dto: Atualizarcadastro) {
    return this.clienteAdminBackend.emit('cadastro-empresa', dto);
  }
}
