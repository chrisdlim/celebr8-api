import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CelebrationDocument = Celebration & Document;

@Schema({ timestamps: true })
export class Celebration {

  @Prop()
  event: string;

  @Prop()
  posts: any[];

  @Prop()
  description: string;

  @Prop()
  celebratee: string;

  @Prop()
  author: string;
}

export class CelebrationDto {
  event: string;
  description: string;
  celebratee: string;
  author: string;
}

export const CelebrationSchema = SchemaFactory.createForClass(Celebration);