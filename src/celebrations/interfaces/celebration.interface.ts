import { Document } from 'mongoose';

export interface Celebration extends Document {
  createdAt: string;
  event: string;
  description: string;
  celebratee: string;
  author: string;
}