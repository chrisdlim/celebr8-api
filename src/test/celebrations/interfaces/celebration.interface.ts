import { Document } from 'mongoose';

export interface Celebration extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}