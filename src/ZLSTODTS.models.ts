import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZLSTODTSDocument = ZLSTODTS & Document

@Schema()
export class ZLSTODTS {
  @Prop()
  ODCONO: number;

  @Prop()
  ODNUM: string;

  @Prop()
  ODTYPE: string;

  @Prop()
  ODDDEPART: string;

  @Prop()
  ODDARRIVEE: string;

  @Prop()
  ODARTICLE: string;

  @Prop()
  ODQTE: number;

  @Prop()
  ODDATE: number;

  @Prop()
  ODEMPL: string;

}


export const ZLSTODTSSchema = SchemaFactory.createForClass(ZLSTODTS)