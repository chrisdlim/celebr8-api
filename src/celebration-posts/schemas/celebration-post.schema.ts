import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Celebration } from 'src/celebrations/schemas/celebrations.schema';
import * as mongoose from 'mongoose';

export type CelebrationPostDocument = CelebrationPost & Document;

@Schema({ timestamps: true })
export class CelebrationPost {

  @Prop()
  author: string;

  @Prop()
  message: string;

  @Prop({ type: Types.ObjectId, ref: Celebration.name })
  celebration: Celebration;

}

export class CelebrationPostDto {
  event: string;
  description: string;
  celebratee: string;
  author: string;
  celebration?: Celebration;
}

export const CelebrationPostSchema = SchemaFactory.createForClass(CelebrationPost);
