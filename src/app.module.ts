import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZLSTODTSSchema } from './ZLSTODTS.models';
import { ZPLARTTSSchema } from './ZPLARTTS.models';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb+srv://testtesttest:testtesttest@cluster0.fk1nvkk.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'ZLSTODTS',schema:ZLSTODTSSchema},{name:'ZPLARTTS',schema:ZPLARTTSSchema} ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
