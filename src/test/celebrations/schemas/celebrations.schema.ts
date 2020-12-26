import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CelebrationDocument = Celebration & Document;

@Schema()
export class Celebration {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CelebrationSchema = SchemaFactory.createForClass(Celebration);