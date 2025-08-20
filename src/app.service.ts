import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnosEntity } from './Alumnos/entity/alumnos.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(AlumnosEntity)
    private readonly alumnosEntity: Repository<AlumnosEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): string {
    return 'Hello World 2!';
  }

  sendMessage() {
    return 'Message sent';
  }
}
