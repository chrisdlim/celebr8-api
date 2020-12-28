import { Document } from 'mongoose';

export interface Celebration extends Document {
  createdAt: string;
  event: string;
  posts: any[];
  description: string;
  celebratee: string;
  author: string;
}