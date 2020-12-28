import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CelebrationPost } from '../../celebration-posts/schemas/celebration-post.schema';

export type CelebrationDocument = Celebration & Document;

@Schema({ timestamps: true })
export class Celebration {

  @Prop()
  event: string;

  @Prop({ type: Types.ObjectId, ref: 'CelebrationPost' })
  posts: CelebrationPost[];

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