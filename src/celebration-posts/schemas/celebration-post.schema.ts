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

  @Prop({ type: Types.ObjectId })
  celebration: Celebration;

}

export class CelebrationPostDto {
  message: string;
  author: string;
}

export const CelebrationPostSchema = SchemaFactory.createForClass(CelebrationPost);
