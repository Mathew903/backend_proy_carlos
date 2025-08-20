import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AlumnosEntity } from './Alumnos/entity/alumnos.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV.trim()}.local`,
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PSW,
      database: process.env.DB_NAME,
      entities: [AlumnosEntity],
      synchronize: true, //Solo en desarrollo, nunca en produccion
    }),
    TypeOrmModule.forFeature([AlumnosEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
