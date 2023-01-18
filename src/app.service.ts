import { Injectable } from '@nestjs/common';
import { ZLSTODTS, ZLSTODTSDocument } from './ZLSTODTS.models';
import { ZPLARTTS, ZPLARTTSDocument } from './ZPLARTTS.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel('ZLSTODTS') private readonly ZLSTODTSModel: Model<ZLSTODTS>,
    @InjectModel('ZPLARTTS') private readonly ZPLARTTSModel: Model<ZPLARTTS>,
  ){

// setInterval(()=>{
//   this.fetchdata()
//  }, 10000)

  }

  //  reading the ZLSTODTS collection 
  async readZLSTODTS(){
    return this.ZLSTODTSModel.find({})
    .then((ZLSTODTS)=>{return ZLSTODTS})
    .catch((err)=>console.log(err))
  }

  //  reading the ZPLARTTS collection 
  async readZPLARTTS(){
    return this.ZPLARTTSModel.find({})
    .then((ZPLARTTS)=>{return ZPLARTTS})
    .catch((err)=>console.log(err))
  }


  fetchdata(){
    return this.httpService.get<any>('https://63726e9f025414c6370f9e76.mockapi.io/ZPLARTTS').pipe(
      map((APIRES) => {
        this.ZPLARTTSModel.deleteMany().then((ONDELETE => {
          this.ZPLARTTSModel.insertMany(APIRES.data)
          return 'OK'
        }))

       
      }),
    )
  }




}
