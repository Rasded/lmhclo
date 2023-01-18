import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('ZLSTODTS')
  readZLSTODTS(){
    return this.appService.readZLSTODTS()
  }


  @Get('ZPLARTTS')
  readZPLARTTS(){
    return this.appService.readZPLARTTS()
  }


  @Get('update')
  update(){
    return this.appService.fetchdata()
  }

}
