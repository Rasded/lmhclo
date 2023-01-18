import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZPLARTTSDocument = ZPLARTTS & Document

@Schema()
export class ZPLARTTS {
  @Prop()
  PLCONO: number;

  @Prop()
  PLDEPOT: string;

  @Prop()
  PLARTICLE: string;

  @Prop()
  PLTYPE: string;

  @Prop()
  PLQTE: number;

  @Prop()
  PLDATE: number;

  @Prop()
  PLNUMTRN: string;


}


export const ZPLARTTSSchema = SchemaFactory.createForClass(ZPLARTTS)