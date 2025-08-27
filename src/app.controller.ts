import { Controller, Get, Post, Res, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { DataSensor } from './types';
//import { AlumnosDTO } from './Alumnos/dto/alumnos.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() //'Hello World!'
  }

  /* @Post('api/create-alumno')
  createAlumno(@Body() alumnos: AlumnosDTO, @Res() res: Response) {
    console.log(alumnos)
    //servicio...
    res.send(`OK, info recivida: ${alumnos.nombre}`);
  }

  @Post('api/create-user')
  createUser(@Body() data: {id: number, nombre: string}, @Res() res: Response) {
    const res = this.appService.createUser(data)
    res.send(res.data)
  }

  @Post('api/send-message')
  sendMessage(@Req() req: Request, @Res() res: Response) {
    console.log(req.body)
    res.send('OK, info recivida y leida correctamente');
  }
  
  @Post('api/send-message2')
  sendMessageWithBody(@Body() mensaje: {msg: string}, @Res() res: Response) {
    console.log(mensaje)
    res.send(`OK, info recivida: ${mensaje.msg}`);
  }
  */
  
  @Post('api/send-data')
  createTempAndHum(
    @Body() data: DataSensor, //{data: {temperature: number, humidity: number}}
    @Res() res: Response
  ) {
    console.log(data)
    res.send(`OK, info recivida`);
  }
}
